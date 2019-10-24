import { EventsPlot } from "./events";
export class Plot extends EventsPlot {
    constructor(options) {
        super(options);
        this.drawAxis();
    }
}
export { p } from "./utils";
