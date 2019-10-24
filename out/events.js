import { DrawPlot } from "./draw";
export class EventsPlot extends DrawPlot {
    constructor(options) {
        super(options);
        this.handleClick = (event) => {
            const rect = this.canvas.getBoundingClientRect();
            const canvasPoint = { x: event.clientX - rect.left, y: event.clientY - rect.top };
            this.onClick(this.canvasToMath(canvasPoint));
        };
        /** Override it ! */
        this.onClick = (point) => { };
        this.canvas.addEventListener("click", this.handleClick);
    }
    remove() {
        this.canvas.removeEventListener("click", this.handleClick);
    }
}
