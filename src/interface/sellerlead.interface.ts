import { IBaseSeller } from "./baseSeller";
export interface ISellerLeadPayload extends IBaseSeller {}
export interface ISellerLead {
    create(data: ISellerLeadPayload):any;
    update(sellerId: string, data: ISellerLeadPayload):any;
    delete(sellerId: string):any;
    getOne(sellerId: string):any;
    createSeller(sellerId:String):any;
    
  }