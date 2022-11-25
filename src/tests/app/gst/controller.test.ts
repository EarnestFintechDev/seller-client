import { Client } from '../../../index';
import { expect } from 'chai';
const mockConfig = {
    apiKey: '1234',
  };
var client = new Client(mockConfig.apiKey,{"backendUrl":"http://localhost:8080"});
export  function GstControllerTest() {
   

  describe("Controller Test", async function () {
    describe("Gst Controller Test",  async function () {
        
        it("Test  ", async function () {
          const response = await client.gstTemplate.getAll('/Gst')
          console.log(response)
        })
    });
  });
}