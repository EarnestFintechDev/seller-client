import { ClientHttp } from "../http";
export class RatingTemplate extends ClientHttp {
  /**
   * @param {string} ratingId - ratingId of the rating to get details of rating.
   */
  async getAverageRating(ratingId: string) {
    return await this.http.get(`/rating/avearge/?id=${ratingId}`);
  }
}
