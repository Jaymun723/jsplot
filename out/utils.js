import { BasePlot } from "./base";
export const p = (x, y) => ({ x, y });
export const apply = (fn, p) => ({ x: fn(p.x), y: fn(p.y) });
export class UtilPlot extends BasePlot {
    mathToCanvas(p) {
        return {
            x: this.axisOrigin.x + p.x * this.ratio,
            y: -(p.y * this.ratio - this.axisOrigin.y),
        };
    }
    canvasToMath(p) {
        return {
            x: (p.x - this.axisOrigin.x) / this.ratio,
            y: (this.axisOrigin.y - p.y) / this.ratio,
        };
    }
    getAxisEnd() {
        return {
            x: [p(0, this.axisOrigin.y), p(this.canvas.width, this.axisOrigin.y)],
            y: [p(this.axisOrigin.x, 0), p(this.axisOrigin.x, this.canvas.height)],
        };
    }
}
