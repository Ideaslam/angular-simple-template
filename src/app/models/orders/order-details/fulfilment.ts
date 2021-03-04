

import {Item } from '../../products/Item' ;
export class Fulfillment { 
        id: number;
        order_id: number;
        status: string;
        created_at: Date;
        service: string;
        updated_at: Date;
        tracking_company: string;
        shipment_status: string;
        location_id: number;
        line_items: Item[ ];
        tracking_number: null;
        tracking_numbers: [];
        tracking_url: null;
        tracking_urls: any[];
        receipt: {};
        name: string;
        admin_graphql_api_id: string
     
}




