import { ClientHttp } from '../http';

import {
  IRatingPayload,
  IRating,
} from '../interface/rating.interface';

export class NotificationTemplates
  extends ClientHttp
  implements IRating
{
  /**
   * @param {number} page - Page number to fetch
   * @param {number} limit - Number of results to fetch in one page
   * @param {number} orderBy - type is string
   * @param {number} order - ordered data in ASC or DESC order
   */
  async getAll(page?: number, limit?: number,orderBy?: string,order?:string) {
    if (page === undefined && limit === undefined &&orderBy === undefined && order === undefined) {
      return await this.http.get(`/Rating`);
    } else if (page === undefined) {
      return await this.http.get(`/Rating`, {
        params: {
          limit,
        },
      });
    } else if (limit === undefined) {
      return await this.http.get(`/Rating`, {
        params: { page },
      });
    } else if (orderBy === undefined) {
      return await this.http.get(`/Rating`, {
        params: { page,limit},
      });
    }
    else if (order === undefined) {
      return await this.http.get(`/Rating`, {
        params: { page,limit,order},
      });
    }
    else {
      return await this.http.get(`/Rating`, {
        params: { page, limit,orderBy,order },
      });
    }
  }

  /**
   * @param {IRatingPayload} data - All the additional parameters to create a rating
   */
  async create(data: IRatingPayload) {
    return await this.http.post(`/Rating`, {
      ...data,
    });
  }

  /**
   * @param {string} ratingId - ratingId of the rating to update rating
   * @param {IRatingPayload} data - All the additional parameters to update a rating
   */
  async update(ratingId: string, data: IRatingPayload) {
    return await this.http.put(`/Rating/${ratingId}`, {
      ...data,
    });
  }

  /**
   * @param {string} ratingId - ratingId of the rating to delete rating
   */
  async delete(ratingId: string) {
    return await this.http.delete(`/Rating/${ratingId}`);
  }

  /**
   * @param {string} ratingId - ratingId of the rating to get details of rating.
   */
  async getOne(ratingId: string) {
    return await this.http.get(`/Rating/${ratingId}`);
  }
  async getAverageRating(ratingId: string) {
    return await this.http.get(`/rating/avearge/?id=${ratingId}`)
  }

}