export interface IRatingPayload {
  sellerId: string;
  rating: Number;
  review: string;
  
}
export interface IRating {
  create(data: IRatingPayload):any;
  update(ratingId: string, data: IRatingPayload):any;
  delete(ratingId: string):any;
  getOne(ratingId: string):any;
  getAverageRating(ratingId:String):any;
  
}

