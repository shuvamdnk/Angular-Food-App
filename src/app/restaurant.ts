import { Timestamp } from "rxjs";

export interface restaurant{
    id:number,
    city_id:number,
    location_id:number,
    restaurant_name:string,
    image:string,
    description:string,
    created_at:Timestamp<any>,
    updated_at:Timestamp<any>,
}