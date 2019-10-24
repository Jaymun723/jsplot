import { DrawPlot } from "./draw"
import { PlotOptions, Point } from "./base"

export class EventsPlot extends DrawPlot {
  constructor(options?: PlotOptions) {
    super(options)
    this.canvas.addEventListener("click", this.handleClick)
  }

  remove() {
    this.canvas.removeEventListener("click", this.handleClick)
  }

  private handleClick = (event: MouseEvent) => {
    const rect = this.canvas.getBoundingClientRect()
    const canvasPoint = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    this.onClick(this.canvasToMath(canvasPoint))
  }

  /** Override it ! */
  onClick = (point: Point) => {}
}
