import { Address } from "../customer/address";


export class Customer {

    id: number;
    email: string;
    accepts_marketing: boolean;
    created_at: Date;
    updated_at: Date;
    first_name: string;
    last_name: string;
    orders_count: number;
    state: string;
    total_spent: string;
    last_order_id: number;
    note: string;
    verified_email: boolean;
    multipass_identifier: boolean;
    tax_exempt: boolean;
    phone: string;
    tags: string;
    last_order_name: string;
    currency: string;
    accepts_marketing_updated_at: Date;
    marketing_opt_in_level: string;
    tax_exemptions: [];
    admin_graphql_api_id: string;
    default_address:  Address
}




