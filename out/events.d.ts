import { DrawPlot } from "./draw";
import { PlotOptions, Point } from "./base";
export declare class EventsPlot extends DrawPlot {
    constructor(options?: PlotOptions);
    remove(): void;
    private handleClick;
    /** Override it ! */
    onClick: (point: Point<number>) => void;
}
