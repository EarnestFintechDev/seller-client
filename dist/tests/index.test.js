"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_test_1 = require("./app/feedback/controller.test");
var controller_test_2 = require("./app/gst/controller.test");
var controller_test_3 = require("./app/rating/controller.test");
var controller_test_4 = require("./app/seller/controller.test");
var controller_test_5 = require("./app/sellerLead/controller.test");
describe("Test Suite", function () {
    (0, controller_test_2.GstControllerTest)();
    (0, controller_test_3.ratingControllerTest)();
    (0, controller_test_4.sellerControllerTest)();
    (0, controller_test_5.SellerLeadControllerTest)();
    (0, controller_test_1.feedbackControllerTest)();
});
//# sourceMappingURL=index.test.js.map