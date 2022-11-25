import { ClientHttp } from '../http';

import {
  ISellerLeadPayload,
  ISellerLead,
} from '../interface/sellerlead.interface';

export class NotificationTemplates
  extends ClientHttp
  implements ISellerLead
{
  /**
   * @param {number} page - Page number to fetch
   * @param {number} limit - Number of results to fetch in one page
   * @param {number} orderBy - type is string
   * @param {number} order - ordered data in ASC or DESC order
   */
  async getAll(page?: number, limit?: number,orderBy?: string,order?:string) {
    if (page === undefined && limit === undefined &&orderBy === undefined && order === undefined) {
      return await this.http.get(`/sellerlead`);
    } else if (page === undefined) {
      return await this.http.get(`/sellerlead`, {
        params: {
          limit,
        },
      });
    } else if (limit === undefined) {
      return await this.http.get(`/sellerlead`, {
        params: { page },
      });
    } else if (orderBy === undefined) {
      return await this.http.get(`/sellerlead`, {
        params: { page,limit},
      });
    }
    else if (order === undefined) {
      return await this.http.get(`/sellerlead`, {
        params: { page,limit,order},
      });
    }
    else {
      return await this.http.get(`/sellerlead`, {
        params: { page, limit,orderBy,order },
      });
    }
  }

  /**
   * @param {ISellerLeadPayload} data - All the additional parameters to create a rating
   */
  async create(data: ISellerLeadPayload) {
    return await this.http.post(`/sellerlead`, {
      ...data,
    });
  }

  /**
   * @param {string} sellerLeadId - sellerLeadId of the rating to update rating
   * @param {ISellerLeadPayload} data - All the additional parameters to update a rating
   */
  async update(sellerLeadId: string, data: ISellerLeadPayload) {
    return await this.http.put(`/sellerlead/${sellerLeadId}`, {
      ...data,
    });
  }

  /**
   * @param {string} sellerLeadId - sellerLeadId of the rating to delete rating
   */
  async delete(sellerLeadId: string) {
    return await this.http.delete(`/sellerlead/${sellerLeadId}`);
  }

  /**
   * @param {string} sellerLeadId - sellerLeadId of the rating to get details of rating.
   */
  async getOne(sellerLeadId: string) {
    return await this.http.get(`/sellerlead/${sellerLeadId}`);
  }
  async createSeller(sellerLeadId: string) {
    return await this.http.post(`/sellerlead/convert/?id=${sellerLeadId}`)
  }

}