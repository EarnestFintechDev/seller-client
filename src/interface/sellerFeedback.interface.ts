
export interface IFeedBack {
  create(data: IFeedBackPayload):any;
  update(templateId: string, data: IFeedBackPayload):any;
  delete(templateId: string):any;
  getOne(templateId: string):any;
  
}

export interface IFeedBackPayload {
  feedBack: string;
}

