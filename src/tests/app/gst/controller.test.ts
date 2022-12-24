import { client1 } from "../../client.test";
import { assert } from "chai";

const fetchId = async () => {
  const response = await client1.gstTemplate.getAll("/Gst");
  return response.result[0].id;
};
export function GstControllerTest() {
  describe("Controller Test", async function () {
    describe("Gst Controller Test", async function () {
      it("GetAll GSt ", async function () {
        const response = await client1.gstTemplate.getAll("/Gst",1,2,undefined,undefined);
        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        assert.isFalse(response.status.error);
      });
      it("Get  gst by every param", async function () {
        const response = await client1.gstTemplate.getAll("/Gst",1,2,'id',"ASC");
        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        assert.isFalse(response.status.error);
      });
      it("Get  gst by every orderBy and order param", async function () {
        const response = await client1.gstTemplate.getAll("/Gst",undefined,undefined,undefined,"ASC");
        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        assert.isFalse(response.status.error);
      });
      it("Get  gst orderBy and order param", async function () {
        const response = await client1.gstTemplate.getAll("/Gst",1,undefined,"id","ASC");
        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        assert.isFalse(response.status.error);
      });
      it("Get  gst when order param is undefiened", async function () {
        const response = await client1.gstTemplate.getAll("/Gst",1,2,"id",undefined);
        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        assert.isFalse(response.status.error);
      });
      it("Create gst ", async function () {
        const response = await client1.gstTemplate.create({}, "/Gst");
        assert.equal(response.status.code, 201);
        assert.exists(response.result);
        assert.isFalse(response.status.error);
      });
      it("get gst by id", async function () {
        const id = await fetchId();
        const response = await client1.gstTemplate.getOne("/Gst", id);
        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        assert.isFalse(response.status.error);
      });
      it("Delete gst by id", async function () {
        const id = await fetchId();
        const response = await client1.gstTemplate.delete("/Gst", id);
        assert.equal(response.status.code, 200);
        assert.exists(response.result);
        assert.isFalse(response.status.error);
        const response2 = await client1.gstTemplate.getOne("/Gst", id);
        assert.equal(response2.status.code, 404);
        assert.equal(response2.result, null);
        assert.isTrue(response2.status.error);
      });
    });
  });
}
