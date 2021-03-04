

import { Item } from '../../products/Item';
import { PriceSet } from './price-set';

export class Refund {
        id: number;
        order_id: number;
        created_at: Date;
        note: string;
        user_id: string;
        processed_at: Date;
        restock: boolean;
        duties: any[];
        admin_graphql_api_id: string;
        refund_line_items:refundLineItem[];
        transactions: [];
        order_adjustments: orderAdjustment[]
}




export class orderAdjustment {

        id: number;
        order_id: number;
        refund_id: number;
        amount: number;
        tax_amount: number;
        kind: string;
        reason: string;
        amount_set: PriceSet;
        tax_amount_set: PriceSet;

}



export class refundLineItem {

        id: number;
        quantity: number;
        line_item_id: number;
        location_id: number;
        restock_type: string;
        subtotal: number;
        total_tax: number;
        subtotal_set: PriceSet;
        total_tax_set: PriceSet;
        line_item: Item
        tax_amount_set: PriceSet;

}