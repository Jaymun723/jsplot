import { BasePlot, Point } from "./base";
export declare const p: (x: number, y: number) => Point<number>;
export declare const apply: (fn: (cmp: number) => number, p: Point<number>) => {
    x: number;
    y: number;
};
export declare class UtilPlot extends BasePlot {
    mathToCanvas(p: Point): Point;
    canvasToMath(p: Point): Point;
    getAxisEnd(): {
        x: [Point, Point];
        y: [Point, Point];
    };
}
