"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var events_1 = require("./events");
var Plot = /** @class */ (function (_super) {
    __extends(Plot, _super);
    function Plot(options) {
        var _this = _super.call(this, options) || this;
        _this.drawAxis();
        return _this;
    }
    return Plot;
}(events_1.EventsPlot));
exports.Plot = Plot;
var utils_1 = require("./utils");
exports.p = utils_1.p;
