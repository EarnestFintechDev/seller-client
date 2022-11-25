import { AxiosInstance, AxiosError } from "axios";
import { Routes } from "./interface/routes.interface";
export class ClientHttp implements Routes {
    http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }

  /**
   * @param {string} routeUrl - it is the endpoint of the route
   * @param {number} page - Page number to fetch
   * @param {number} limit - Number of results to fetch in one page
   * @param {number} orderBy - type is string
   * @param {number} order - ordered data in ASC or DESC order
   */
  async getAll(
    routeUrl: string,
    page?: number,
    limit?: number,
    orderBy?: string,
    order?: string
  ) {
    if (
      page === undefined &&
      limit === undefined &&
      orderBy === undefined &&
      order === undefined
    ) {
      try {
        return await this.http.get(`${routeUrl}`);
      } catch (err: any) {
        if (err.response && err.response.data) {
          const { error_code, description } = err.response.data;
          const msg = `sellerClient API - ${error_code} ${description || ""}`;

          throw new AxiosError(msg, err);
        }
        throw new AxiosError(err);
      }
    } else if (page === undefined) {
      try {
        return await this.http.get(`/${routeUrl}`, {
          params: {
            limit,
          },
        });
      } catch (err: any) {
        if (err.response && err.response.data) {
          const { error_code, description } = err.response.data;
          const msg = `sellerClient API - ${error_code} ${description || ""}`;

          throw new AxiosError(msg, err);
        }
        throw new AxiosError(err.message, err);
      }
    } else if (limit === undefined) {
      try {
        return await this.http.get(`/${routeUrl}`, {
          params: { page },
        });
      } catch (err: any) {
        if (err.response && err.response.data) {
          const { error_code, description } = err.response.data;
          const msg = `sellerClient API - ${error_code} ${description || ""}`;

          throw new AxiosError(msg, err);
        }
        throw new AxiosError(err.message, err);
      }
    } else if (orderBy === undefined) {
      try {
        return await this.http.get(`/${routeUrl}`, {
          params: { page, limit },
        });
      } catch (err: any) {
        if (err.response && err.response.data) {
          const { error_code, description } = err.response.data;
          const msg = `sellerClient API - ${error_code} ${description || ""}`;

          throw new AxiosError(msg, err);
        }
        throw new AxiosError(err.message, err);
      }
    } else if (order === undefined) {
      try {
        return await this.http.get(`/${routeUrl}`, {
          params: { page, limit, order },
        });
      } catch (err: any) {
        if (err.response && err.response.data) {
          const { error_code, description } = err.response.data;
          const msg = `sellerClient API - ${error_code} ${description || ""}`;

          throw new AxiosError(msg, err);
        }
        throw new AxiosError(err.message, err);
      }
    } else {
      try {
        return await this.http.get(`/${routeUrl}`, {
          params: { page, limit, orderBy, order },
        });
      } catch (err: any) {
        if (err.response && err.response.data) {
          const { error_code, description } = err.response.data;
          const msg = `sellerClient API - ${error_code} ${description || ""}`;

          throw new AxiosError(msg, err);
        }
        throw new AxiosError(err.message, err);
      }
    }
  }

  /**
   * @param {Payload} data - It is a generic data type for different payload
   * @param {string} routeUrl - it is the endpoint of the route
   */

  async create<Payload>(data: Payload, routeUrl: string) {
    try {
    
      return await this.http.post(`/${routeUrl}`, {
        ...data,
      });
    } catch (err: any) {
      if (err.response && err.response.data) {
        const { error_code, description } = err.response.data;
        const msg = `sellerClient API - ${error_code} ${description || ""}`;

        return new AxiosError(msg, err);
      }
      throw new AxiosError(err.message, err);
    }
  }

  /**
   * @param {string} id - id is a param for the route
   * @param {Payload} data - All the additional parameters to update a end points
   * @param {string} routeUrl - it is the endpoint of the route
   */

  async update<Payload>(data: Payload, routeUrl: string, id: string) {
    try {
      return await this.http.put(`/${routeUrl}/${id}`, {
        ...data,
      });
    } catch (err: any) {
      if (err.response && err.response.data) {
        const { error_code, description } = err.response.data;
        const msg = `sellerClient API - ${error_code} ${description || ""}`;

        throw new AxiosError(msg, err);
      }
      throw new AxiosError(err.message, err);
    }
  }

  /**
   * @param {string} id - sellerLeadId of the rating to delete rating
   * @param {string} routeUrl - it is the endpoint of the route
   */

  async delete(routeUrl: string, id: string) {
    try {
      return await this.http.delete(`/${routeUrl}/${id}`);
    } catch (err: any) {
      if (err.response && err.response.data) {
        const { error_code, description } = err.response.data;
        const msg = `sellerClient API - ${error_code} ${description || ""}`;

        throw new AxiosError(msg, err);
      }
      throw new AxiosError(err.message, err);
    }
  }

  /**
   * @param {string} id - sellerLeadId of the rating to delete rating
   * @param {string} routeUrl - it is the endpoint of the route
   */

  async getOne(routeUrl: string, id: string) {
    try {
      return await this.http.get(`/${routeUrl}/${id}`);
    } catch (err: any) {
      if (err.response && err.response.data) {
        const { error_code, description } = err.response.data;
        const msg = `sellerClient API - ${error_code} ${description || ""}`;

        throw new AxiosError(msg, err);
      }
      throw new AxiosError(err.message, err);
    }
  }
}
