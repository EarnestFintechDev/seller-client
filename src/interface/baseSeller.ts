export interface IBaseSeller {
    name: string;
    contactPersonName: string;
    contactPersonPhoneNumber: string;
    contactPersonDesignation: string;
    contactPersonEmail?: string | null;
    industry?: string |null;
    typeOfOrganization?: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string| null;
    city: string;
    state: string;
    pincode: string;
    gstin?: string| null;
    tan?: string| null;
    turnover:Number;   
}


