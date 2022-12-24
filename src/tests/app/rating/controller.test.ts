import { client } from "../../client.test";
import { assert } from "chai";

const createrating = async (sellerId: string, rate: number, rev: string) => {
  const ratingObj = {
    sellerId: sellerId,
    rating: rate,
    review: rev,
  };

  const response = await client.ratingTemplate.create(ratingObj, "/rating");

  return response;
};

const createSellerLead = async () => {
  const seller = {
    name: "Test",
    addressLine1: "line1",
    addressLine2: "line2",
    city: "city",
    state: "state",
    pincode: "pincode",
    turnover: 123,
    addressLine3: "line3",
    contactPersonDesignation: "designation",
    contactPersonName: "name",
    contactPersonPhoneNumber: "phone",
    gstin: "gstin",
    typeOfOrganization: "type",
  };
 
  const response =  await client.sellerLeadTemplate.create(seller, "/sellerlead");
  return response;
};
const createSeller = async () => {

  const result = await createSellerLead();
  const id = result.result;

  
  const response = await client.sellerLeadTemplate.createSeller(id);
  assert.equal(response.status.code, 200);
  assert.exists(response.result);
  assert.isFalse(response.status.error);
  const sellerId = response.result;  
  const response2: any = await client.sellerTemplate.getOne('/seller',sellerId);
  assert.equal(response2.status.code, 200);
  assert.exists(response2.result);
  assert.isFalse(response2.status.error);
  return response2?.result?.id;
};
const getratingById = async (id: string, name: string) => {
    
  const response2 = await client.ratingTemplate.getOne('/rating',id);
  assert.equal(response2.status.code, 200);
  assert.equal(response2.result.sellerId, name);
  assert.equal(response2.result.id, id);
  assert.isFalse(response2.status.error);
  return response2;
};

const fecthAll = async () => {
  const response = await client.ratingTemplate.getAll('/rating');
  assert.equal(response.status.code, 200);
  assert.exists(response.result);
  assert.exists(response.status);
  assert.isFalse(response.status.error);
  return response.result;
};
export function ratingControllerTest() {
  describe("Controller Test", async function () {
    describe("Rating Lead Controller Test", async function () {
      it("Rating  Create", async function () {
        const seller = await createSeller();
        const response0 = await createrating(seller, 80, "Awsome0");
        const response = await createrating(seller, 50, "Awsome");
        assert.equal(response.status.code, 201);
        assert.exists(response.result);

        const id = response.result;
        await getratingById(id, seller);
      });
      it("Rating   Get Request", async function () {
        await fecthAll();
      });
      it("Rating  Update Request", async function () {
        const seller = await fecthAll();
        const result = await createrating(seller[0].sellerId, 50, "Awsome");
        const id = result.result;
        const Rating = {
          sellerId: seller[0].sellerId,
          rating: 24,
          review: "Awsome",
        };
    
        const response = await client.ratingTemplate.update(Rating,'/rating',id);
        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        getratingById(id, Rating.review);
      });

      it("Rating Lead to Rating conversion Request", async function () {
        const seller = await fecthAll();
    
        const sellerId = seller[0].sellerId;
        const response = await  client.ratingTemplate.getAverageRating(sellerId)
        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        assert.isFalse(response.status.error);
      });
      it("Rating Lead Delete Request", async function () {
        const result = await fecthAll();
        const id = result[0].id;
        
        const response = await client.ratingTemplate.delete('/rating',id)
        assert.equal(response.status.code, 200);
        assert.equal(response.message, "Success in delete");
        assert.exists(response.result);
        assert.isFalse(response.status.error);
        const response2 = await client.ratingTemplate.getOne('/rating',id)
        assert.equal(response2.status.code, 404);
        assert.equal(response2.message, "Not found");
        assert.equal(response2.result, null);
        assert.isTrue(response2.status.error);
      });
    });
  });
}
