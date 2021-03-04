import {PriceSet} from './order-details/price-set' ;
import {Address} from '../customer/address' ;
import {Customer} from '../customer/customer' ;
import {Item} from '../products/Item' ;
import { TaxLine } from './order-details/tax-line';
import { ShipLine } from './order-details/ship-line';

import {  Fulfillment } from './order-details/fulfilment';
import {  Refund } from './order-details/refund';

export class Order{

            id: number;
            email: string ;
            closed_at: string;
            created_at: Date ;
            updated_at: Date;
            number?: number;
            note: string;
            token: string;
            gateway: string ;
            test: boolean;
            total_price: string;
            subtotal_price: string;
            total_weight?: number;
            total_tax: string;
            taxes_included?: boolean;
            currency: string;
            financial_status: string;
            confirmed?: boolean;
            total_discounts?: number;
            total_line_items_price?: number;
            cart_token: string;
            buyer_accepts_marketing: boolean;
            name: string;
            referring_site: string ; 
            landing_site: string ;
            cancelled_at: any;
            cancel_reason: any;
            total_price_usd: string;
            checkout_token: string;
            reference: string;
            user_id: string;
            location_id: string;
            source_identifier: string;
            source_url: string;
            processed_at: Date;
            device_id: string;
            phone: string;
            customer_locale: string;
            app_id?: number;
            browser_ip: string;
            landing_site_ref: string;
            order_number?: number;
            discount_applications:any [];
            discount_codes:any [];
            note_attributes: any[];
            payment_gateway_names: string[];
            processing_method: string;
            checkout_id: number;
            source_name: string;
            fulfillment_status: string;
            tax_lines:TaxLine [];
            tags: string;
            contact_email: string;
            order_status_url: string;
            presentment_currency: string;
            total_line_items_price_set: PriceSet;
            total_discounts_set: PriceSet ;
            total_shipping_price_set:  PriceSet ;
            subtotal_price_set:PriceSet;
            total_price_set:PriceSet;
            total_tax_set: PriceSet;
            line_items: Item[];
            fulfillments: Fulfillment[];
            refunds:Refund [];
            total_tip_received: string;
            original_total_duties_set: string;
            current_total_duties_set: string;
            admin_graphql_api_id: string;
            shipping_lines: ShipLine[];
            billing_address:  Address; 
            shipping_address: Address;
            client_details: {
                browser_ip: string;
                accept_language: string;
                user_agent: string;
                session_hash: string;
                browser_width: number;
                browser_height: number
            };
            customer:  Customer ;
    
}



export class  OrderSearchCriteria{
   
    id? :number ; 
    ids? :number ; 
    name?:string ;
    status?:string; 
 
}