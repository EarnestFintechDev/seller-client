import { ClientHttp } from "../http";
export declare class RatingTemplate extends ClientHttp {
    /**
     * @param {string} ratingId - ratingId of the rating to get details of rating.
     */
    getAverageRating(sellerId: string): Promise<any>;
}
