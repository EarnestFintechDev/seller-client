import { client } from "../../client.test";
import { assert } from "chai";
const createSellerLead= async() =>{
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
    }
    const response = await client.sellerLeadTemplate.create(seller,'/sellerLead')
    return response
  }
  const getSellerLeadById= async(id:string, name:string)=>{
         const response2 = await client.sellerLeadTemplate.getOne('/sellerLead',id)

          assert.equal(response2.status.code, 200)
          assert.equal(response2.result.name, name)
          assert.equal(response2.result.id, id)
          assert.isFalse(response2.status.error)
  }
  export function SellerLeadControllerTest() {
    describe("Controller Test", async function () {
      describe("Seller Lead Controller Test", async function () {
        it("Seller Lead Create", async function () {
          const response = await createSellerLead()
          assert.equal(response.status.code, 201)
          assert.exists(response.result)
  
          const id = response.result
      await   getSellerLeadById(id,"Test")
          
        })
        it("Seller Lead  Get Request", async function () {
          const response = await client.sellerLeadTemplate.getAll('/sellerLead');
          assert.equal(response.status.code, 200)
          assert.exists(response.result)
          assert.exists(response.status.code)
          assert.isFalse(response.status.error)
         
        })
        it("Seller Lead Update Request", async function () {
          
          const result= await createSellerLead()
          const id= result.result
          const seller = {
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
          }
      
          const response = await client.sellerLeadTemplate.update(seller,'/sellerLead',id)
          assert.equal(response.status.code, 200)
          assert.exists(response.result)
       await   getSellerLeadById(id,seller.name)
   
  
        })
        it("Seller Lead Delete Request", async function () {
          
          const result= await createSellerLead()
          const id= result.result
          
          const response = await client.sellerLeadTemplate.delete('/sellerLead',id)
          assert.equal(response.status.code, 200)
          assert.equal(response.message,"Success in delete")
          assert.exists(response.result)
          assert.isFalse(response.status.error)
          const response2 = await client.sellerLeadTemplate.getOne('/sellerLead',id)
          assert.equal(response2.status.code, 404)
          assert.equal(response2.message,"Not found")
          assert.equal(response2.result,null)
          assert.isTrue(response2.status.error) 
  
        })
  
        it("Seller Lead to Seller conversion Request", async function () {
          
          const result= await createSellerLead()
          const id= result.result
          
          const response = await client.sellerLeadTemplate.createSeller(id)
          assert.equal(response.status.code, 200)
          assert.exists(response.result)
          assert.isFalse(response.status.error)
          const sellerId=response.result
          const response2 = await await client.sellerLeadTemplate.getOne('/sellerLead',id)
          assert.equal(response2.status.code, 200)
          assert.exists(response2.result,)
          assert.isFalse(response2.status.error) 
  
        })
      })
    })
  }