import { ClientHttp } from "../http";
export declare class SellerTemplate extends ClientHttp {
    /**
     * @param {string} sellerLeadId - sellerLeadId of the rating to delete rating
     */
    createSeller(sellerLeadId: string): Promise<any>;
}
