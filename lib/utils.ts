import { BasePlot, Point } from "./base"

export const p = (x: number, y: number): Point => ({ x, y })
export const apply = (fn: (cmp: number) => number, p: Point) => ({ x: fn(p.x), y: fn(p.y) })

export class UtilPlot extends BasePlot {
  mathToCanvas(p: Point): Point {
    return {
      x: this.axisOrigin.x + p.x * this.ratio,
      y: -(p.y * this.ratio - this.axisOrigin.y),
    }
  }

  canvasToMath(p: Point): Point {
    return {
      x: (p.x - this.axisOrigin.x) / this.ratio,
      y: (this.axisOrigin.y - p.y) / this.ratio,
    }
  }

  getAxisEnd(): { x: [Point, Point]; y: [Point, Point] } {
    return {
      x: [p(0, this.axisOrigin.y), p(this.canvas.width, this.axisOrigin.y)],
      y: [p(this.axisOrigin.x, 0), p(this.axisOrigin.x, this.canvas.height)],
    }
  }
}
