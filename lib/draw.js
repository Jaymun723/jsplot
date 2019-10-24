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
var ts_optchain_1 = require("ts-optchain");
var utils_1 = require("./utils");
var DrawPlot = /** @class */ (function (_super) {
    __extends(DrawPlot, _super);
    function DrawPlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawPlot.prototype.drawPoint = function (point, options) {
        var o = ts_optchain_1.oc(options);
        var _a = o.canvasCoords(false) ? point : this.mathToCanvas(point), x = _a.x, y = _a.y;
        this.ctx.beginPath();
        var radius = o.radius(5);
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        var color = o.color("red");
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    DrawPlot.prototype.drawPoints = function (points, options) {
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var point = points_1[_i];
            this.drawPoint(point, options);
        }
    };
    DrawPlot.prototype.drawSegment = function (a, b, options) {
        var o = ts_optchain_1.oc(options);
        var aCoords = o.canvasCoords(false) ? a : this.mathToCanvas(a);
        var bCoords = o.canvasCoords(false) ? b : this.mathToCanvas(b);
        this.ctx.beginPath();
        this.ctx.moveTo(aCoords.x, aCoords.y);
        this.ctx.lineTo(bCoords.x, bCoords.y);
        var style = o.radius(5) + "px" + " " + o.color("red");
        this.ctx.strokeStyle = style;
        this.ctx.stroke();
        this.ctx.closePath();
    };
    DrawPlot.prototype.drawText = function (text, point, options) {
        var o = ts_optchain_1.oc(options);
        var p = o.canvasCoords(false) ? point : this.mathToCanvas(point);
        this.ctx.font = o.font("10px sans-serif");
        this.ctx.textAlign = o.align("center");
        if (o.stroke(false)) {
            this.ctx.strokeText(text, p.x, p.y);
        }
        else {
            this.ctx.fillText(text, p.x, p.y);
        }
    };
    /** Draw a line of formule y=ax+b */
    DrawPlot.prototype.drawLine = function (a, b, options) {
        var x1 = this.canvasToMath({ x: 0, y: 0 }).x;
        var x2 = this.canvasToMath({ x: this.canvas.width, y: 0 }).x;
        var y1 = a * x1 + b;
        var y2 = a * x2 + b;
        var start = utils_1.p(x1, y1);
        var end = utils_1.p(x2, y2);
        console.log(start, end);
        this.drawSegment(start, end, options);
    };
    DrawPlot.prototype.drawAxisGrads = function (orientation) {
        var _a;
        var _b = orientation, _c = this.getAxisEnd()[_b], startCanvas = _c[0], endCanvas = _c[1];
        var start = utils_1.apply(Math.round, this.canvasToMath(startCanvas));
        var end = utils_1.apply(Math.round, this.canvasToMath(endCanvas));
        if (start[orientation] > end[orientation]) {
            ;
            _a = [end, start], start = _a[0], end = _a[1];
        }
        for (var i = start[orientation]; i < end[orientation]; i += this.axis[orientation].grad) {
            if (i === 0)
                continue;
            if (orientation === "x") {
                var a = { x: i, y: 0.5 };
                var b = { x: i, y: -0.5 };
                var iPos = { x: i, y: -1 };
                this.drawSegment(a, b, { color: this.axis.x.color });
                this.drawText(String(i), iPos);
            }
            else {
                var a = { y: i, x: 0.5 };
                var b = { y: i, x: -0.5 };
                var iPos = { y: i, x: -1 };
                this.drawSegment(a, b, { color: this.axis.y.color });
                this.drawText(String(i), iPos);
            }
        }
    };
    DrawPlot.prototype.drawAxis = function () {
        var _a = this.getAxisEnd(), x = _a.x, y = _a.y;
        this.drawSegment(x[0], x[1], { color: this.axis.x.color, canvasCoords: true });
        this.drawAxisGrads("x");
        this.drawSegment(y[0], y[1], { color: this.axis.y.color, canvasCoords: true });
        this.drawAxisGrads("y");
    };
    DrawPlot.prototype.clear = function (redrawAxis) {
        if (redrawAxis === void 0) { redrawAxis = true; }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (redrawAxis) {
            this.drawAxis();
        }
    };
    return DrawPlot;
}(utils_1.UtilPlot));
exports.DrawPlot = DrawPlot;
