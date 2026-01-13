import axios, { AxiosInstance } from "axios";
import { odooConfig } from "@/config/odoo.config";

// Type definitions
interface OdooResponse<T = unknown> {
    success: boolean;
    error: unknown | null;
    data: T[];
    err?: string;
}

interface OdooNameSearchItem {
    id: number;
    name: string;
}

interface OdooRequest {
    jsonrpc: string;
    method: string;
    params: {
        id: string;
        service: string;
        method: string;
        args: unknown[];
    };
}

type OdooMethod = "read" | "search" | "search_read" | "name_search" | "create" | "write";

const odooMethods: Record<string, OdooMethod> = {
    read: "read",
    search: "search",
    search_read: "search_read",
    name_search: "name_search",
    create: "create",
    update: "write",
};

const createInstance = (): AxiosInstance => {
    return axios.create({
        baseURL: odooConfig.server,
        headers: { "Content-Type": "application/json" },
    });
};

const createOdooRequest = (): OdooRequest => ({
    jsonrpc: "2.0",
    method: "call",
    params: {
        id: new Date().getMilliseconds().toString(),
        service: "object",
        method: "execute_kw",
        args: [],
    },
});

export async function odooSearch(
    model: string,
    searchParam: string
): Promise<OdooResponse<OdooNameSearchItem>> {
    const resp: OdooResponse<OdooNameSearchItem> = { success: false, error: null, data: [] };

    try {
        const odooReq = createOdooRequest();
        const data = {
            ...odooReq,
            params: {
                ...odooReq.params,
                args: [
                    odooConfig.database,
                    odooConfig.userid,
                    odooConfig.password,
                    model,
                    odooMethods.name_search,
                    [],
                    { name: searchParam },
                ],
            },
        };
        const instance = createInstance();
        const result = await instance.get("/", { data });

        if (!result.data || result.data.error) {
            resp.error = result.data?.error;
            resp.success = false;
            return resp;
        }

        const rawData = result.data.result || [];
        resp.data = rawData
            .map((x: unknown[]) => (x.length > 0 ? { id: x[0] as number, name: x[1] as string } : null))
            .filter((x: OdooNameSearchItem | null): x is OdooNameSearchItem => x !== null && x.id > 0);
        resp.success = true;
    } catch (err) {
        resp.err = err instanceof Error ? err.message : String(err);
        resp.success = false;
    }

    return resp;
}

export async function odooSearchRead<T = Record<string, unknown>>(
    model: string,
    searchParam: unknown[] = [],
    offset = 0,
    limit = 12,
    fields: string[] = []
): Promise<OdooResponse<T>> {
    const resp: OdooResponse<T> = { success: false, error: null, data: [] };

    try {
        const odooReq = createOdooRequest();
        const data = {
            ...odooReq,
            params: {
                ...odooReq.params,
                args: [
                    odooConfig.database,
                    odooConfig.userid,
                    odooConfig.password,
                    model,
                    odooMethods.search_read,
                    [searchParam],
                    { offset, limit, fields },
                ],
            },
        };
        const instance = createInstance();
        const result = await instance.get("/", { data });

        if (!result.data || result.data.error) {
            resp.error = result.data?.error;
            resp.success = false;
            return resp;
        }

        resp.data = result.data.result || [];
        resp.success = true;
    } catch (err) {
        resp.err = err instanceof Error ? err.message : String(err);
        resp.success = false;
    }

    return resp;
}

export async function odooRead<T = Record<string, unknown>>(
    model: string,
    ids: number[] = [],
    filter: Record<string, unknown> = {}
): Promise<OdooResponse<T>> {
    const resp: OdooResponse<T> = { success: false, error: null, data: [] };

    try {
        const odooReq = createOdooRequest();
        const data = {
            ...odooReq,
            params: {
                ...odooReq.params,
                args: [
                    odooConfig.database,
                    odooConfig.userid,
                    odooConfig.password,
                    model,
                    odooMethods.read,
                    [ids],
                    filter,
                ],
            },
        };
        const instance = createInstance();
        const result = await instance.get("/", { data });

        if (!result.data || result.data.error) {
            resp.error = result.data?.error;
            resp.success = false;
            return resp;
        }

        resp.data = result.data.result || [];
        resp.success = true;
    } catch (err) {
        resp.err = err instanceof Error ? err.message : String(err);
        resp.success = false;
    }

    return resp;
}

export async function odooCreate(
    model: string,
    body: Record<string, unknown>
): Promise<OdooResponse<OdooNameSearchItem>> {
    const resp: OdooResponse<OdooNameSearchItem> = { success: false, error: null, data: [] };

    try {
        const odooReq = createOdooRequest();
        const data = {
            ...odooReq,
            params: {
                ...odooReq.params,
                args: [
                    odooConfig.database,
                    odooConfig.userid,
                    odooConfig.password,
                    model,
                    odooMethods.create,
                    [body],
                ],
            },
        };
        const instance = createInstance();
        const result = await instance.get("/", { data });

        if (!result.data || result.data.error) {
            resp.error = result.data?.error;
            resp.success = false;
            return resp;
        }

        resp.data = [
            {
                id: result.data.result as number,
                name: (body.name as string) || "",
            },
        ];
        resp.success = true;
    } catch (err) {
        resp.err = err instanceof Error ? err.message : String(err);
        resp.success = false;
    }

    return resp;
}

export async function odooUpdate(
    model: string,
    id: number,
    body: Record<string, unknown>
): Promise<OdooResponse<OdooNameSearchItem>> {
    const resp: OdooResponse<OdooNameSearchItem> = { success: false, error: null, data: [] };

    try {
        const odooReq = createOdooRequest();
        const data = {
            ...odooReq,
            params: {
                ...odooReq.params,
                args: [
                    odooConfig.database,
                    odooConfig.userid,
                    odooConfig.password,
                    model,
                    odooMethods.update,
                    [[id], body],
                ],
            },
        };
        const instance = createInstance();
        const result = await instance.get("/", { data });

        if (!result.data || result.data.error) {
            resp.error = result.data?.error;
            resp.success = false;
            return resp;
        }

        resp.data = [
            {
                id: result.data.result as number,
                name: (body.name as string) || "",
            },
        ];
        resp.success = true;
    } catch (err) {
        resp.err = err instanceof Error ? err.message : String(err);
        resp.success = false;
    }

    return resp;
}

export async function odooFetchOrCreate(
    model: string,
    searchParam: unknown[] = [],
    body: Record<string, unknown>
): Promise<OdooResponse<OdooNameSearchItem>> {
    const resp: OdooResponse<OdooNameSearchItem> = { success: false, error: null, data: [] };

    try {
        const searchResult = await odooSearchRead<OdooNameSearchItem>(model, searchParam, 0, 2, ["name"]);
        if (searchResult.success && searchResult.data.length > 0) {
            resp.data = searchResult.data;
            resp.success = true;
            return resp;
        }

        const createResult = await odooCreate(model, body);
        if (createResult.success) {
            resp.data = createResult.data;
            resp.success = true;
            return resp;
        }
    } catch (err) {
        resp.err = err instanceof Error ? err.message : String(err);
        resp.success = false;
    }

    return resp;
}