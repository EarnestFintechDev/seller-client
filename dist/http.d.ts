import { AxiosInstance } from "axios";
import { Routes } from "./interface/routes.interface";
export declare class ClientHttp implements Routes {
    http: AxiosInstance;
    constructor(http: AxiosInstance);
    /**
     * @param {string} routeUrl - it is the endpoint of the route
     * @param {number} page - Page number to fetch
     * @param {number} count - Number of results to fetch in one page
     * @param {number} orderBy - type is string
     * @param {number} order - ordered data in ASC or DESC order
     */
    getAll(routeUrl: string, page?: number, count?: number, orderBy?: string, order?: string): Promise<any>;
    /**
     * @param {Payload} data - It is a generic data type for different payload
     * @param {string} routeUrl - it is the endpoint of the route
     */
    create<Payload>(data: Payload, routeUrl: string): Promise<any>;
    /**
     * @param {string} id - id is a param for the route
     * @param {Payload} data - All the additional parameters to update a end points
     * @param {string} routeUrl - it is the endpoint of the route
     */
    update<Payload>(data: Payload, routeUrl: string, id: string): Promise<any>;
    /**
     * @param {string} id - sellerLeadId of the rating to delete rating
     * @param {string} routeUrl - it is the endpoint of the route
     */
    delete(routeUrl: string, id: string): Promise<any>;
    /**
     * @param {string} id - sellerLeadId of the rating to delete rating
     * @param {string} routeUrl - it is the endpoint of the route
     */
    getOne(routeUrl: string, id: string): Promise<any>;
}
