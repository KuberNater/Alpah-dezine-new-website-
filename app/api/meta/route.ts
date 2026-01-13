import { MetaDataType } from "@/types/meta/meta.types";
import { odooSearchRead } from "@/utils/odoo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const slug = request.nextUrl.searchParams.get("slug")
        if (!slug) {
            return NextResponse.json({ message: "Slug is required" }, { status: 400 })
        }
        //Cached data 
        const result = await odooSearchRead('x_seo', [['x_page_url', '=', `${slug}`]], 0, 0, [
            'x_name',
            'x_keywords',
            'x_page_url',
            'x_page_title',
            'x_studio_opengraph_keywords',
            'x_studio_meta_description',
            'x_studio_opengraph_title',
            'x_studio_opengraph_description',
            'x_studio_opengraph_imageurl',
            'x_studio_opengraph_imagealt',
            'x_studio_jsonld'
        ]);
        if (result.success && result.data.length > 0) {
            return NextResponse.json({
                data: result.data[0] as MetaDataType
            })
        }
        return NextResponse.json({ message: "Not found" }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}