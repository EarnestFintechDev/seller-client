"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var axios_1 = __importDefault(require("axios"));
var events_1 = require("events");
var basicRoutes_template_1 = require("./templates/basicRoutes.template");
var rating_template_1 = require("./templates/rating.template");
var sellerlead_template_1 = require("./templates/sellerlead.template");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(apiKey, config) {
        var _this = _super.call(this) || this;
        _this.apiKey = apiKey;
        _this.http = axios_1.default.create({
            baseURL: _this.buildBackendUrl(config),
            headers: {
                Authorization: "ApiKey ".concat(_this.apiKey),
            },
        });
        _this.http.interceptors.response.use(function (response) { return response; }, function (error) { return error.response; });
        _this.feedBackTemplate = new basicRoutes_template_1.BasicRouteTemplate(_this.http);
        _this.gstTemplate = new basicRoutes_template_1.BasicRouteTemplate(_this.http);
        _this.sellerTemplate = new basicRoutes_template_1.BasicRouteTemplate(_this.http);
        _this.ratingTemplate = new rating_template_1.RatingTemplate(_this.http);
        _this.sellerLeadTemplate = new sellerlead_template_1.SellerTemplate(_this.http);
        return _this;
    }
    Client.prototype.buildBackendUrl = function (config) {
        if (!config.backendUrl) {
            return "http://localhost:8080";
        }
        return config.backendUrl && config.backendUrl;
    };
    return Client;
}(events_1.EventEmitter));
exports.Client = Client;
//# sourceMappingURL=index.js.map