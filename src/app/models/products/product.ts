import { Option } from "./option";
import { ProductImage } from "./product-image";
import { Variant } from "./variant";

export class Product{

    id: number;
    title:string;
    body_html:string;
    vendor: string;
    product_type: string;
    created_at: Date ;
    handle: string;
    updated_at: Date;
    published_at: string;
    template_suffix:string;
    status: string;
    published_scope: string;
    tags: string;
    admin_graphql_api_id:string; 
    variant:Variant[]; 
    options:Option[];
    images: ProductImage[];
    image:ProductImage ; 

    

}



export class  ProductSearchCriteria{
   
    id? :number ; 
    ids? :string ; 
    name?:string ;
 
}