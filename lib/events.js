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
var draw_1 = require("./draw");
var EventsPlot = /** @class */ (function (_super) {
    __extends(EventsPlot, _super);
    function EventsPlot(options) {
        var _this = _super.call(this, options) || this;
        _this.handleClick = function (event) {
            var rect = _this.canvas.getBoundingClientRect();
            var canvasPoint = { x: event.clientX - rect.left, y: event.clientY - rect.top };
            _this.onClick(_this.canvasToMath(canvasPoint));
        };
        /** Override it ! */
        _this.onClick = function (point) { };
        _this.canvas.addEventListener("click", _this.handleClick);
        return _this;
    }
    EventsPlot.prototype.remove = function () {
        this.canvas.removeEventListener("click", this.handleClick);
    };
    return EventsPlot;
}(draw_1.DrawPlot));
exports.EventsPlot = EventsPlot;
