import { CONTACT_FORM_VALIDATION } from "@/types/contact/contact.type";
import { odooCreate, odooSearchRead } from "@/utils/odoo";
import { NextRequest, NextResponse } from "next/server";

function fixBase64Padding(base64: string) {
    base64 = base64.replace(/^data:.*;base64,/, '');
    while (base64.length % 4 !== 0) {
        base64 += '=';
    }
    return base64;
}

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { success, data, error } = CONTACT_FORM_VALIDATION.safeParse(requestBody);
        if (!success) {
            console.log({ success, error });
            return NextResponse.json({ message: error }, { status: 400 });
        }
        console.log('Validated data:', data);
        const body = data;
        let description = `
<b>Inquiry Type:</b> ${body.inquiryType}<br><br>
<b>Client Type:</b> ${body.clientType}<br><br>
<b>Message:</b> ${body.message}
`;

        const tagIds = await odooSearchRead('crm.tag', [['id', 'in', [8]]]);
        let tagId;
        if (tagIds?.data?.length === 0) {
            return NextResponse.json({ message: "Tag not found" }, { status: 404 })
        } else {
            tagId = tagIds.data[0].id;
        }
        const orderPayload = {
            name: body.name,
            email_from: body.email,
            description: description,
            phone: body.phone,
            tag_ids: [[6, 0, [tagId]]]
        }

        const leadId = await odooCreate('crm.lead', orderPayload);
        if (body.resume && leadId.success) {
            await odooCreate('ir.attachment', {
                name: body.name,
                datas: fixBase64Padding(body.resume),
                res_model: 'crm.lead',
                res_id: leadId.data[0].id,
                type: 'binary',
            });
        }
        if (leadId.success) {
            return NextResponse.json({ message: "Lead created successfully", data: leadId }, { status: 200 })
        }
        return NextResponse.json({ message: "Lead creation failed", data: leadId }, { status: 500 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}