import { ClientHttp } from '../http';

import {
  IFeedBackPayload,
  IFeedBack,
} from '../interface/sellerFeedback.interface';

export class FeedBackTemplate
  extends ClientHttp
  implements IFeedBack
{
  /**
   * @param {number} page - Page number to fetch
   * @param {number} limit - Number of results to fetch in one page
   * @param {number} orderBy - type is string
   * @param {number} order - ordered data in ASC or DESC order
   */
  async getAll(page?: number, limit?: number,orderBy?: string,order?:string) {
    if (page === undefined && limit === undefined &&orderBy === undefined && order === undefined) {
      return await this.http.get(`/FeedBack`);
    } else if (page === undefined) {
      return await this.http.get(`/FeedBack`, {
        params: {
          limit,
        },
      });
    } else if (limit === undefined) {
      return await this.http.get(`/FeedBack`, {
        params: { page },
      });
    } else if (orderBy === undefined) {
      return await this.http.get(`/FeedBack`, {
        params: { page,limit},
      });
    }
    else if (order === undefined) {
      return await this.http.get(`/FeedBack`, {
        params: { page,limit,order},
      });
    }
    else {
      return await this.http.get(`/FeedBack`, {
        params: { page, limit,orderBy,order },
      });
    }
  }

  /**
   * @param {IFeedBackPayload} data - All the additional parameters to create a feedback
   */
  async create(data: IFeedBackPayload) {
    return await this.http.post(`/FeedBack`, {
      ...data,
    });
  }

  /**
   * @param {string} feedBackId - feedBackId of the feedback to update feedback
   * @param {IFeedBackPayload} data - All the additional parameters to update a feedback
   */
  async update(feedBackId: string, data: IFeedBackPayload) {
    return await this.http.put(`/FeedBack/${feedBackId}`, {
      ...data,
    });
  }

  /**
   * @param {string} feedBackId - feedBackId of the feedback to delete feedback
   */
  async delete(feedBackId: string) {
    return await this.http.delete(`/FeedBack/${feedBackId}`);
  }

  /**
   * @param {string} feedBackId - feedBackId of the feedback to get details of feedback.
   */
  async getOne(feedBackId: string) {
    return await this.http.get(`/FeedBack/${feedBackId}`);
  }

}