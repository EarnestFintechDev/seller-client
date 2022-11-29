import axios, { AxiosInstance } from "axios";
import { EventEmitter } from "events";

import { ClientConfiguration } from "./interface/config.interface";

import { BasicRouteTemplate } from "./templates/basicRoutes.template";
import { RatingTemplate } from "./templates/rating.template";
import { SellerTemplate } from "./templates/sellerlead.template";

export class Client extends EventEmitter {
  private readonly apiKey?: string;
  private readonly http: AxiosInstance;
  readonly feedBackTemplate: BasicRouteTemplate;
  readonly gstTemplate: BasicRouteTemplate;
  readonly sellerTemplate: BasicRouteTemplate;
  readonly ratingTemplate: RatingTemplate;
  readonly sellerLeadTemplate: SellerTemplate;

  constructor(apiKey: string, config: ClientConfiguration) {
    super();
    this.apiKey = apiKey;

    this.http = axios.create({
      baseURL: this.buildBackendUrl(config),
      headers: {
        Authorization: `ApiKey ${this.apiKey}`,
      },
    });
    this.http.interceptors.response.use((response) => response,(error)=>error.response)

    this.feedBackTemplate = new BasicRouteTemplate(this.http);
    this.gstTemplate = new BasicRouteTemplate(this.http);
    this.sellerTemplate = new BasicRouteTemplate(this.http);
    this.ratingTemplate = new RatingTemplate(this.http);
    this.sellerLeadTemplate = new SellerTemplate(this.http);
  }

  private buildBackendUrl(config: ClientConfiguration) {
    if (!config.backendUrl) {
      return `http://localhost:8080`
    }

    return config.backendUrl && config.backendUrl;
  }
}
