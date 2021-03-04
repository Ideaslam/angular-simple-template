
import { PriceSet } from '../orders/order-details/price-set'
import { TaxLine } from '../orders/order-details/tax-line'
export class Item{

         
                id: number;
                variant_id: number;
                title: string;
                quantity: number;
                sku: string;
                variant_title: string;
                vendor: string;
                fulfillment_service: string;
                product_id: number;
                requires_shipping: boolean;
                taxable: boolean;
                gift_card: boolean;
                name: string;
                variant_inventory_management: string;
                properties: [];
                product_exists: boolean;
                fulfillable_quantity: number;
                grams: number;
                price: number;
                total_discount: number;
                fulfillment_status: string;
                price_set:PriceSet;
                total_discount_set: PriceSet;
                discount_allocations:any [];
                duties: any[];
                admin_graphql_api_id: string;
                tax_lines: TaxLine[];
                origin_location: {
                    id: number;
                    country_code: string;
                    province_code:string;
                    name: string;
                    address1: string;
                    address2: string;
                    city: string;
                    zip: number;
                }
            }
 
 