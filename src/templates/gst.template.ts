import { ClientHttp } from '../http';

import {
  IGst,
} from '../interface/gst.interface';

export class NotificationTemplates
  extends ClientHttp
  implements IGst
{
  /**
   * @param {number} page - Page number to fetch
   * @param {number} limit - Number of results to fetch in one page
   * @param {number} orderBy - type is string
   * @param {number} order - ordered data in ASC or DESC order
   */
  async getAll(page?: number, limit?: number,orderBy?: string,order?:string) {
    if (page === undefined && limit === undefined &&orderBy === undefined && order === undefined) {
      return await this.http.get(`/Gst`);
    } else if (page === undefined) {
      return await this.http.get(`/Gst`, {
        params: {
          limit,
        },
      });
    } else if (limit === undefined) {
      return await this.http.get(`/Gst`, {
        params: { page },
      });
    } else if (orderBy === undefined) {
      return await this.http.get(`/Gst`, {
        params: { page,limit},
      });
    }
    else if (order === undefined) {
      return await this.http.get(`/Gst`, {
        params: { page,limit,order},
      });
    }
    else {
      return await this.http.get(`/Gst`, {
        params: { page, limit,orderBy,order },
      });
    }
  }

  /**
   * @param {IGstPayload} data - All the additional parameters to create a feedback
   */
  async create() {
    return await this.http.post(`/Gst`);
  }


  /**
   * @param {string} feedBackId - feedBackId of the feedback to delete feedback
   */
  async delete(feedBackId: string) {
    return await this.http.delete(`/Gst/${feedBackId}`);
  }

  /**
   * @param {string} feedBackId - feedBackId of the feedback to get details of feedback.
   */
  async getOne(feedBackId: string) {
    return await this.http.get(`/Gst/${feedBackId}`);
  }

}