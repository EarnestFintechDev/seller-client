import { AxiosInstance} from "axios";
import { Routes } from "./interface/routes.interface";
export class ClientHttp implements Routes {
  http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  /**
   * @param {string} routeUrl - it is the endpoint of the route
   * @param {number} page - Page number to fetch
   * @param {number} count - Number of results to fetch in one page
   * @param {number} orderBy - type is string
   * @param {number} order - ordered data in ASC or DESC order
   */
  async getAll(
    routeUrl: string,
    page?: number,
    count?: number,
    orderBy?: string,
    order?: string
  ) {
    if (
      page === undefined &&
      count === undefined &&
      orderBy === undefined &&
      order === undefined
    ) {
      const response = await this.http.get(`${routeUrl}`);
      return response.data;
    } else if (page === undefined) {
      const response = await this.http.get(`${routeUrl}`, {
        params: {count,order, orderBy},
      });
      return response.data;
    } else if (count === undefined) {
      const response = await this.http.get(`${routeUrl}`, {
        params: { page,order,orderBy, },
      });
      return response.data;
    } else if (orderBy === undefined) {
      const response = await this.http.get(`${routeUrl}`, {
        params: { page, count },
      });
      return response.data;
    } else if (order === undefined) {
      const response = await this.http.get(`${routeUrl}`, {
        params: { page, count, orderBy },
      });
      return response.data;

    }
     else {
      const response = await this.http.get(`${routeUrl}`, {
        params: { page, count, orderBy, order },
      });
      return response.data;
    }
  }

  /**
   * @param {Payload} data - It is a generic data type for different payload
   * @param {string} routeUrl - it is the endpoint of the route
   */

  async create<Payload>(data: Payload, routeUrl: string) {
    const response = await this.http.post(`${routeUrl}`, {
      ...data,
    });
    return response.data;
  }

  /**
   * @param {string} id - id is a param for the route
   * @param {Payload} data - All the additional parameters to update a end points
   * @param {string} routeUrl - it is the endpoint of the route
   */

  async update<Payload>(data: Payload, routeUrl: string, id: string) {
    const response = await this.http.put(`${routeUrl}/${id}`, {
      ...data,
    });
    return response.data;
  }

  /**
   * @param {string} id - sellerLeadId of the rating to delete rating
   * @param {string} routeUrl - it is the endpoint of the route
   */

  async delete(routeUrl: string, id: string) {
    const response = await this.http.delete(`${routeUrl}/${id}`);
    return response.data;
  }

  /**
   * @param {string} id - sellerLeadId of the rating to delete rating
   * @param {string} routeUrl - it is the endpoint of the route
   */

  async getOne(routeUrl: string, id: string) {
    const response = await this.http.get(`${routeUrl}/${id}`);
    return response.data;
  }
}
