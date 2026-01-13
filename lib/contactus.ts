// lib/seo.ts
import axios from "axios";


export async function getContactUsData(data: any): Promise<any> {
    try {
        const response = await axios.post(`/api/contact-us`, data);
        if (response.status === 200 && response.data.data) {
            return response.data.data
        }
        return null
    } catch (error) {
        console.error(`[Contact Us] Using fallback metadata for (API unavailable)`, error);
        return null
    }
}
