import { ClientHttp } from "../http";
export class SellerTemplate extends ClientHttp {
  /**
   * @param {string} sellerLeadId - sellerLeadId of the rating to delete rating
   */
  async createSeller(sellerLeadId: string) {
    const response=await this.http.post(`/sellerlead/convert/?id=${sellerLeadId}`);
    return response.data
  }
}
