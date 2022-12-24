import { client } from "../../client.test";
import { assert } from "chai";

const createseller = async () => {
    const sellerObj = {
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
    const response = await client.sellerTemplate.create(sellerObj,'/seller')
    return response;
  };
  const getsellerById = async ( id: string, name: string) => {
    const response2 = await client.sellerTemplate.getOne('/seller',id);
    assert.equal(response2.status.code, 200);
    assert.equal(response2.result.name, name);
    assert.equal(response2.result.id, id);
   
    assert.isFalse(response2.status.error);
  };
  export function sellerControllerTest() {
    describe("Controller Test", async function () {
      describe("Seller Controller Test", async function () {
        it("Seller Create", async function () {
          const response = await createseller();
          assert.equal(response.status.code, 201);
          assert.exists(response.result);
          const id = response.result;
          await getsellerById(id, "Test");
        });
        it("Seller  Get Request", async function () {
          const response = await client.sellerTemplate.getAll('/seller')
          assert.equal(response.status.code, 200);
          assert.exists(response.result);
          assert.exists(response.status);
          assert.isFalse(response.status.error);
        });
        it("Seller Update Request", async function () {
          const result = await createseller();
          const id = result.result;
          const sellerObj = {
            name: "Test1",
            addressLine1: "line2",
            addressLine2: "line3",
            city: "Ayodhya",
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
      
          const response = await client.sellerTemplate.update(sellerObj,'/seller',id);
          assert.equal(response.status.code, 200);
          assert.exists(response.result);
          await getsellerById(id, sellerObj.name);
        });
        it("Seller Delete Request", async function () {
          const result = await createseller();
          const id = result.result;
          const response = await client.sellerTemplate.delete('/seller',id);
          assert.equal(response.status.code, 200);
          assert.equal(response.message, "Success in delete");
          assert.exists(response.result);
          assert.isFalse(response.status.error);
          
          const response2 = await client.sellerTemplate.getOne('/seller',id);
          assert.equal(response2.status.code, 404);
          assert.equal(response2.message, "Not found");
          assert.equal(response2.result, null);
          assert.isTrue(response2.status.error);
        });
      });
    });
  }