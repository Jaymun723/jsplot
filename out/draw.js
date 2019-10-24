import { oc } from "ts-optchain";
import { UtilPlot, apply, p } from "./utils";
export class DrawPlot extends UtilPlot {
    drawPoint(point, options) {
        const o = oc(options);
        const { x, y } = o.canvasCoords(false) ? point : this.mathToCanvas(point);
        this.ctx.beginPath();
        const radius = o.radius(5);
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        const color = o.color("red");
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawPoints(points, options) {
        for (const point of points) {
            this.drawPoint(point, options);
        }
    }
    drawSegment(a, b, options) {
        const o = oc(options);
        const aCoords = o.canvasCoords(false) ? a : this.mathToCanvas(a);
        const bCoords = o.canvasCoords(false) ? b : this.mathToCanvas(b);
        this.ctx.beginPath();
        this.ctx.moveTo(aCoords.x, aCoords.y);
        this.ctx.lineTo(bCoords.x, bCoords.y);
        const style = `${o.radius(5) + "px"} ${o.color("red")}`;
        this.ctx.strokeStyle = style;
        this.ctx.stroke();
        this.ctx.closePath();
    }
    drawText(text, point, options) {
        const o = oc(options);
        const p = o.canvasCoords(false) ? point : this.mathToCanvas(point);
        this.ctx.font = o.font("10px sans-serif");
        this.ctx.textAlign = o.align("center");
        if (o.stroke(false)) {
            this.ctx.strokeText(text, p.x, p.y);
        }
        else {
            this.ctx.fillText(text, p.x, p.y);
        }
    }
    /** Draw a line of formule y=ax+b */
    drawLine(a, b, options) {
        const { x: x1 } = this.canvasToMath({ x: 0, y: 0 });
        const { x: x2 } = this.canvasToMath({ x: this.canvas.width, y: 0 });
        const y1 = a * x1 + b;
        const y2 = a * x2 + b;
        const start = p(x1, y1);
        const end = p(x2, y2);
        this.drawSegment(start, end, options);
    }
    drawAxisGrads(orientation) {
        const { [orientation]: [startCanvas, endCanvas], } = this.getAxisEnd();
        let start = apply(Math.round, this.canvasToMath(startCanvas));
        let end = apply(Math.round, this.canvasToMath(endCanvas));
        if (start[orientation] > end[orientation]) {
            ;
            [start, end] = [end, start];
        }
        for (let i = start[orientation]; i < end[orientation]; i += this.axis[orientation].grad) {
            if (i === 0)
                continue;
            if (orientation === "x") {
                let a = { x: i, y: 0.5 };
                let b = { x: i, y: -0.5 };
                let iPos = { x: i, y: -1 };
                this.drawSegment(a, b, { color: this.axis.x.color });
                this.drawText(String(i), iPos);
            }
            else {
                let a = { y: i, x: 0.5 };
                let b = { y: i, x: -0.5 };
                let iPos = { y: i, x: -1 };
                this.drawSegment(a, b, { color: this.axis.y.color });
                this.drawText(String(i), iPos);
            }
        }
    }
    drawAxis() {
        const { x, y } = this.getAxisEnd();
        this.drawSegment(x[0], x[1], { color: this.axis.x.color, canvasCoords: true });
        this.drawAxisGrads("x");
        this.drawSegment(y[0], y[1], { color: this.axis.y.color, canvasCoords: true });
        this.drawAxisGrads("y");
    }
    clear(redrawAxis = true) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (redrawAxis) {
            this.drawAxis();
        }
    }
}
