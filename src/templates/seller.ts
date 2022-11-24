import { ClientHttp } from '../http';

import {
  ISellerPayload,
  ISeller,
} from '../interface/seller.interface';

export class NotificationTemplates
  extends ClientHttp
  implements ISeller
{
  /**
   * @param {number} page - Page number to fetch
   * @param {number} limit - Number of results to fetch in one page
   * @param {number} orderBy - type is string
   * @param {number} order - ordered data in ASC or DESC order
   */
  async getAll(page?: number, limit?: number,orderBy?: string,order?:string) {
    if (page === undefined && limit === undefined &&orderBy === undefined && order === undefined) {
      return await this.http.get(`/seller`);
    } else if (page === undefined) {
      return await this.http.get(`/seller`, {
        params: {
          limit,
        },
      });
    } else if (limit === undefined) {
      return await this.http.get(`/seller`, {
        params: { page },
      });
    } else if (orderBy === undefined) {
      return await this.http.get(`/seller`, {
        params: { page,limit},
      });
    }
    else if (order === undefined) {
      return await this.http.get(`/seller`, {
        params: { page,limit,order},
      });
    }
    else {
      return await this.http.get(`/seller`, {
        params: { page, limit,orderBy,order },
      });
    }
  }

  /**
   * @param {ISellerPayload} data - All the additional parameters to create a rating
   */

  /**
   * @param {string} sellerId - sellerId of the rating to update rating
   * @param {ISellerPayload} data - All the additional parameters to update a rating
   */
  async update(sellerId: string, data: ISellerPayload) {
    return await this.http.put(`/seller/${sellerId}`, {
      ...data,
    });
  }

  /**
   * @param {string} sellerId - sellerId of the rating to delete rating
   */
  async delete(sellerId: string) {
    return await this.http.delete(`/seller/${sellerId}`);
  }

  /**
   * @param {string} sellerId - sellerId of the rating to get details of rating.
   */
  async getOne(sellerId: string) {
    return await this.http.get(`/seller/${sellerId}`);
  }
 

}