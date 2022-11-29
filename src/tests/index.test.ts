import { feedbackControllerTest } from "./app/feedback/controller.test";
import { GstControllerTest } from "./app/gst/controller.test";
import { ratingControllerTest } from "./app/rating/controller.test";
import { sellerControllerTest } from "./app/seller/controller.test";
import { SellerLeadControllerTest } from "./app/sellerLead/controller.test";
describe("Test Suite", function () {

    
    GstControllerTest()
    ratingControllerTest()
    sellerControllerTest()
    SellerLeadControllerTest()
    feedbackControllerTest()
  })