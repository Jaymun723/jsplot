export interface Point<T = number> {
    x: T;
    y: T;
}
export interface PlotOptions {
    /** Options related to the canvas */
    canvas?: {
        /** @default 500 (px) */
        width?: number;
        /** @default 500 (px) */
        height?: number;
        /** @default "#e8e6e6" */
        backgroundColor?: string;
    };
    /**
     * The ratio between coords of point in "math" and on the canvas
     * @default 10
     */
    ratio?: number;
    /** Options related to the axis */
    axis?: {
        /**
         * Color of the axis
         * If you provide a point color will be different for each of the axis
         * @default "black"
         */
        color?: Point<string>;
        /**
         * The origin of the axis in coordinates of the canvas
         * Default the center of the canvas
         */
        origin?: Point;
        /**
         * Tick every grad
         * If you provide a point grad will be different for each of the axis
         * @default 1
         */
        grad?: Point;
    };
}
export declare class BasePlot {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    ratio: number;
    axisOrigin: Point;
    axis: Point<{
        color: string;
        grad: number;
    }>;
    constructor(options?: PlotOptions);
}
