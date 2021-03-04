
import {PriceSet} from '../order-details/price-set' ;
import { TaxLine } from '../order-details/tax-line';

export class ShipLine { 
        id: number;
        title: string;
        price: number;
        code: string;
        source: string;
        phone: string;
        requested_fulfillment_service_id: string;
        delivery_category: string;
        carrier_identifier: string;
        discounted_price: number;
        price_set: PriceSet;
        discounted_price_set:PriceSet;
        discount_allocations: [];
        tax_lines:TaxLine []
    
}




