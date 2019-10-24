import { UtilPlot } from "./utils";
import { Point } from "./base";
export interface BaseOptions {
    /** @default "red" */
    color?: string;
    /**
     * The radius or thickness.
     * @default 5
     */
    radius?: number;
    /** @default false */
    canvasCoords?: boolean;
}
export interface TextOptions {
    /** @default "black" */
    color?: string;
    /** @default false */
    canvasCoords?: boolean;
    /** @default "10px sans-serif" */
    font?: string;
    /** @default "center" */
    align?: "start" | "end" | "left" | "right" | "center";
    /** @default false */
    stroke?: boolean;
}
export declare class DrawPlot extends UtilPlot {
    drawPoint(point: Point, options?: BaseOptions): void;
    drawPoints(points: Point[], options?: BaseOptions): void;
    drawSegment(a: Point, b: Point, options?: BaseOptions): void;
    drawText(text: string, point: Point, options?: TextOptions): void;
    /** Draw a line of formule y=ax+b */
    drawLine(a: number, b: number, options?: Omit<BaseOptions, "canvasCoords">): void;
    private drawAxisGrads;
    drawAxis(): void;
    clear(redrawAxis?: boolean): void;
}
