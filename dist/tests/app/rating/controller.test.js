"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingControllerTest = void 0;
var client_test_1 = require("../../client.test");
var chai_1 = require("chai");
var createrating = function (sellerId, rate, rev) { return __awaiter(void 0, void 0, void 0, function () {
    var ratingObj, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ratingObj = {
                    sellerId: sellerId,
                    rating: rate,
                    review: rev,
                };
                return [4 /*yield*/, client_test_1.client.ratingTemplate.create(ratingObj, "/rating")];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
var createSellerLead = function () { return __awaiter(void 0, void 0, void 0, function () {
    var seller, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                seller = {
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
                return [4 /*yield*/, client_test_1.client.sellerLeadTemplate.create(seller, "/sellerlead")];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
var createSeller = function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, id, response, sellerId, response2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, createSellerLead()];
            case 1:
                result = _b.sent();
                id = result.result;
                return [4 /*yield*/, client_test_1.client.sellerLeadTemplate.createSeller(id)];
            case 2:
                response = _b.sent();
                chai_1.assert.equal(response.status.code, 200);
                chai_1.assert.exists(response.result);
                chai_1.assert.isFalse(response.status.error);
                sellerId = response.result;
                return [4 /*yield*/, client_test_1.client.sellerTemplate.getOne('/seller', sellerId)];
            case 3:
                response2 = _b.sent();
                chai_1.assert.equal(response2.status.code, 200);
                chai_1.assert.exists(response2.result);
                chai_1.assert.isFalse(response2.status.error);
                return [2 /*return*/, (_a = response2 === null || response2 === void 0 ? void 0 : response2.result) === null || _a === void 0 ? void 0 : _a.id];
        }
    });
}); };
var getratingById = function (id, name) { return __awaiter(void 0, void 0, void 0, function () {
    var response2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client_test_1.client.ratingTemplate.getOne('/rating', id)];
            case 1:
                response2 = _a.sent();
                chai_1.assert.equal(response2.status.code, 200);
                chai_1.assert.equal(response2.result.sellerId, name);
                chai_1.assert.equal(response2.result.id, id);
                chai_1.assert.isFalse(response2.status.error);
                return [2 /*return*/, response2];
        }
    });
}); };
var fecthAll = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client_test_1.client.ratingTemplate.getAll('/rating')];
            case 1:
                response = _a.sent();
                chai_1.assert.equal(response.status.code, 200);
                chai_1.assert.exists(response.result);
                chai_1.assert.exists(response.status);
                chai_1.assert.isFalse(response.status.error);
                return [2 /*return*/, response.result];
        }
    });
}); };
function ratingControllerTest() {
    describe("Controller Test", function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                describe("Rating Lead Controller Test", function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            it("Rating  Create", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var seller, response0, response, id;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, createSeller()];
                                            case 1:
                                                seller = _a.sent();
                                                return [4 /*yield*/, createrating(seller, 80, "Awsome0")];
                                            case 2:
                                                response0 = _a.sent();
                                                return [4 /*yield*/, createrating(seller, 50, "Awsome")];
                                            case 3:
                                                response = _a.sent();
                                                chai_1.assert.equal(response.status.code, 201);
                                                chai_1.assert.exists(response.result);
                                                id = response.result;
                                                return [4 /*yield*/, getratingById(id, seller)];
                                            case 4:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Rating   Get Request", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, fecthAll()];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Rating  Update Request", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var seller, result, id, Rating, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, fecthAll()];
                                            case 1:
                                                seller = _a.sent();
                                                return [4 /*yield*/, createrating(seller[0].sellerId, 50, "Awsome")];
                                            case 2:
                                                result = _a.sent();
                                                id = result.result;
                                                Rating = {
                                                    sellerId: seller[0].sellerId,
                                                    rating: 24,
                                                    review: "Awsome",
                                                };
                                                return [4 /*yield*/, client_test_1.client.ratingTemplate.update(Rating, '/rating', id)];
                                            case 3:
                                                response = _a.sent();
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.exists(response.result);
                                                getratingById(id, Rating.review);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Rating Lead to Rating conversion Request", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var seller, sellerId, response;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, fecthAll()];
                                            case 1:
                                                seller = _a.sent();
                                                sellerId = seller[0].sellerId;
                                                return [4 /*yield*/, client_test_1.client.ratingTemplate.getAverageRating(sellerId)];
                                            case 2:
                                                response = _a.sent();
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.exists(response.result);
                                                chai_1.assert.isFalse(response.status.error);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            it("Rating Lead Delete Request", function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var result, id, response, response2;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, fecthAll()];
                                            case 1:
                                                result = _a.sent();
                                                id = result[0].id;
                                                return [4 /*yield*/, client_test_1.client.ratingTemplate.delete('/rating', id)];
                                            case 2:
                                                response = _a.sent();
                                                chai_1.assert.equal(response.status.code, 200);
                                                chai_1.assert.equal(response.message, "Success in delete");
                                                chai_1.assert.exists(response.result);
                                                chai_1.assert.isFalse(response.status.error);
                                                return [4 /*yield*/, client_test_1.client.ratingTemplate.getOne('/rating', id)];
                                            case 3:
                                                response2 = _a.sent();
                                                chai_1.assert.equal(response2.status.code, 404);
                                                chai_1.assert.equal(response2.message, "Not found");
                                                chai_1.assert.equal(response2.result, null);
                                                chai_1.assert.isTrue(response2.status.error);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            return [2 /*return*/];
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    });
}
exports.ratingControllerTest = ratingControllerTest;
//# sourceMappingURL=controller.test.js.map