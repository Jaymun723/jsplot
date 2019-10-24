import { oc } from "ts-optchain"

export interface Point<T = number> {
  x: T
  y: T
}

export interface PlotOptions {
  /** Options related to the canvas */
  canvas?: {
    /** @default 500 (px) */
    width?: number
    /** @default 500 (px) */
    height?: number
    /** @default "#e8e6e6" */
    backgroundColor?: string
  }
  /**
   * The ratio between coords of point in "math" and on the canvas
   * @default 10
   */
  ratio?: number
  /** Options related to the axis */
  axis?: {
    /**
     * Color of the axis
     * If you provide a point color will be different for each of the axis
     * @default "black"
     */
    color?: Point<string>
    /**
     * The origin of the axis in coordinates of the canvas
     * Default the center of the canvas
     */
    origin?: Point
    /**
     * Tick every grad
     * If you provide a point grad will be different for each of the axis
     * @default 1
     */
    grad?: Point
  }
}

export class BasePlot {
  public canvas: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D

  public ratio: number
  public axisOrigin: Point
  public axis: Point<{ color: string; grad: number }>

  constructor(options?: PlotOptions) {
    const o = oc(options)
    this.canvas = document.createElement("canvas")
    this.canvas.width = o.canvas.width(500)
    this.canvas.height = o.canvas.height(500)
    this.canvas.style.backgroundColor = o.canvas.backgroundColor("#e8e6e6")

    const ctx = this.canvas.getContext("2d")
    if (!ctx) throw new Error("2D context unavailable.")
    this.ctx = ctx

    this.ratio = o.ratio(10)
    this.axisOrigin = o.axis.origin({ x: this.canvas.width / 2, y: this.canvas.height / 2 })
    this.axis = {
      x: { color: o.axis.color.x("black"), grad: o.axis.grad.x(1) },
      y: { color: o.axis.color.y("black"), grad: o.axis.grad.y(1) },
    }
  }
}
