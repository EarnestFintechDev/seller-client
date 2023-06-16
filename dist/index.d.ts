/// <reference types="node" />
import { EventEmitter } from "events";
import { ClientConfiguration } from "./interface/config.interface";
import { BasicRouteTemplate } from "./templates/basicRoutes.template";
import { RatingTemplate } from "./templates/rating.template";
import { SellerTemplate } from "./templates/sellerlead.template";
export declare class Client extends EventEmitter {
    private readonly apiKey?;
    private readonly http;
    readonly feedBackTemplate: BasicRouteTemplate;
    readonly gstTemplate: BasicRouteTemplate;
    readonly sellerTemplate: BasicRouteTemplate;
    readonly ratingTemplate: RatingTemplate;
    readonly sellerLeadTemplate: SellerTemplate;
    constructor(apiKey: string, config: ClientConfiguration);
    private buildBackendUrl;
}
