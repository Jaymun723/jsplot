import { oc } from "ts-optchain";
export class BasePlot {
    constructor(options) {
        const o = oc(options);
        this.canvas = document.createElement("canvas");
        this.canvas.width = o.canvas.width(500);
        this.canvas.height = o.canvas.height(500);
        this.canvas.style.backgroundColor = o.canvas.backgroundColor("#e8e6e6");
        const ctx = this.canvas.getContext("2d");
        if (!ctx)
            throw new Error("2D context unavailable.");
        this.ctx = ctx;
        this.ratio = o.ratio(10);
        this.axisOrigin = o.axis.origin({ x: this.canvas.width / 2, y: this.canvas.height / 2 });
        this.axis = {
            x: { color: o.axis.color.x("black"), grad: o.axis.grad.x(1) },
            y: { color: o.axis.color.y("black"), grad: o.axis.grad.y(1) },
        };
    }
}
