export class ProductImage{

        id: number;
        product_id: number;
        position: number;
        created_at: Date ;
        updated_at: Date;
        alt: string;
        width: number;
        height: number;
        src:string;
        variant_ids: number[]; 
        admin_graphql_api_id: string 
 
}