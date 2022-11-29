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
  const response = await client.sellerLeadTemplate.create(
    seller,
    "/sellerLead"
  );

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

  const response2: any = await client.sellerTemplate.getOne(
    "/seller",
    sellerId
  );
  assert.equal(response2.status.code, 200);
  assert.exists(response2.result);
  assert.isFalse(response2.status.error);
  return response2?.result?.id;
};
const getratingById = async (id: string, name: string) => {
  const response2 = await client.ratingTemplate.getOne("/rating", id);

  assert.equal(response2.status.code, 200);
  assert.equal(response2.result.sellerId, name);
  assert.equal(response2.result.id, id);
  assert.isFalse(response2.status.error);
  return response2;
};
const createFeedBack = async (id: string, feedback: string) => {
  const ratingObj = {
    feedBack: feedback,
    ratingid: id,
  };

  const response = await client.feedBackTemplate.create(ratingObj, "/Feedback");
  return response;
};

const getfeedbackById = async (id: string) => {
  const response2 = await client.feedBackTemplate.getOne("/Feedback", id);
  assert.equal(response2.status.code, 200);
  assert.equal(response2.result.id, id);
  assert.isFalse(response2.status.error);
  return response2;
};
const fecthAllFeedback = async () => {
  const response = await client.feedBackTemplate.getAll("/FeedBack");
  assert.equal(response.status.code, 200);
  assert.exists(response.result);
  assert.exists(response.status.code);
  assert.isFalse(response.status.error);
  return response.result[0].id;
};
export function feedbackControllerTest() {
  describe("Controller Test", async function () {
    describe("Rating Lead Controller Test", async function () {
      it("Create Feedback", async function () {
        const seller = await createSeller();
        const response = await createrating(seller, 50, "Awsome");

        const result = await createFeedBack(
          response.result,
          "We will try to imporve our service."
        );
        assert.equal(result.status.code, 200);
        assert.exists(result.result);
        assert.isFalse(result.status.error);
        const id = response.result;
        const finalResult = await getratingById(id, seller);
        assert.equal(finalResult.status.code, 200);
        assert.exists(finalResult.result);
        assert.isFalse(finalResult.status.error);
        assert.equal(
          finalResult.result.feedBackId.feedBack,
          "We will try to imporve our service."
        );
      });
      it("Create FeedBack with wrong rating Id", async function () {
        const result = await createFeedBack(
          "5dd3cb2a-134b-44f4-86a5-ce334fdd9211",
          "We will try to imporve our service."
        );
        assert.equal(result.status.code, 405);
        assert.equal(result.result, null);
        assert.isTrue(result.status.error);
      });
      it("Fetch Feedback by ID", async function () {
        const id = await fecthAllFeedback();
        const response2 = await getfeedbackById(id);
        assert.equal(response2.status.code, 200);
        assert.equal(response2.result.id, id);

        assert.isFalse(response2.status.error);
      });
      it("Fetch Feedback by Wrong ID", async function () {
        const id = await fecthAllFeedback();

        const response2 = await await client.feedBackTemplate.getOne(
          "/Feedback",
          id.replace(4, 5)
        );
        assert.equal(response2.status.code, 404);
        assert.isTrue(response2.status.error);
      });
      it("Feedback Update Request", async function () {
        const id = await fecthAllFeedback();

        const feedBackObj = {
          feedBack: "We will look into your matter feedback",
          ratingid: id,
        };
        const response = await client.feedBackTemplate.update(
          feedBackObj,
          "/Feedback",
          id
        );

        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        const response2 = await getfeedbackById(id);
        assert.equal(response2.status.code, 200);
        assert.equal(response2.result.id, id);

        assert.isFalse(response2.status.error);
      });
      it("Rating Delete Request", async function () {
        const id = await fecthAllFeedback();
        const response = await client.feedBackTemplate.delete("/Feedback", id);
        assert.equal(response.status.code, 200);
        assert.equal(response.message, "Success in delete");
        assert.exists(response.result);
        assert.isFalse(response.status.error);
        const response2 = await client.feedBackTemplate.getOne("/Feedback", id);
        assert.equal(response2.status.code, 404);
        assert.equal(response2.message, "Not found");
        assert.equal(response2.result, null);
        assert.isTrue(response2.status.error);
      });
    });
  });
}
