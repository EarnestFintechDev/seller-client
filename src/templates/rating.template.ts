import { ClientHttp } from "../http";
export class RatingTemplate extends ClientHttp {
  /**
   * @param {string} ratingId - ratingId of the rating to get details of rating.
   */
  async getAverageRating(sellerId: string) {
    const response= await this.http.get(`/rating/average/?id=${sellerId}`);
    return response.data;
  }
}
