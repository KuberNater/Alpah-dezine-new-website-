export interface OdooConfig {
    server: string;
    database: string;
    userid: number;
    password: string;
}

export const odooConfig: OdooConfig = {
    server: "https://ad1259-adcloud.odoo.com/jsonrpc",
    database: "ad1259-adcloud-production-22988944",
    userid: 2,
    password: "eeed28c0d72ae1b4b0d480eeba4646327561a317",
};