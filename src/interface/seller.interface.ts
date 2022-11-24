import { IBaseSeller } from "./baseSeller";
export interface ISellerPayload extends IBaseSeller {}
export interface ISeller {
  update(sellerId: string, data: ISellerPayload):any;
  delete(sellerId: string):any;
  getOne(sellerId: string):any;
}