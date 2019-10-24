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
var base_1 = require("./base");
exports.p = function (x, y) { return ({ x: x, y: y }); };
exports.apply = function (fn, p) { return ({ x: fn(p.x), y: fn(p.y) }); };
var UtilPlot = /** @class */ (function (_super) {
    __extends(UtilPlot, _super);
    function UtilPlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UtilPlot.prototype.mathToCanvas = function (p) {
        return {
            x: this.axisOrigin.x + p.x * this.ratio,
            y: -(p.y * this.ratio - this.axisOrigin.y)
        };
    };
    UtilPlot.prototype.canvasToMath = function (p) {
        return {
            x: (p.x - this.axisOrigin.x) / this.ratio,
            y: (this.axisOrigin.y - p.y) / this.ratio
        };
    };
    UtilPlot.prototype.getAxisEnd = function () {
        return {
            x: [exports.p(0, this.axisOrigin.y), exports.p(this.canvas.width, this.axisOrigin.y)],
            y: [exports.p(this.axisOrigin.x, 0), exports.p(this.axisOrigin.x, this.canvas.height)]
        };
    };
    return UtilPlot;
}(base_1.BasePlot));
exports.UtilPlot = UtilPlot;
