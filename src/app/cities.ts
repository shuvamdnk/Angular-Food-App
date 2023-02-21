import { Timestamp } from "rxjs";

export interface city{
    id:number,
    name:string,
    created_at:Timestamp<any>,
    updated_at:Timestamp<any>,
}