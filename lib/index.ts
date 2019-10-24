import { PlotOptions } from "./base"
import { EventsPlot } from "./events"

export class Plot extends EventsPlot {
  constructor(options?: PlotOptions) {
    super(options)
    this.drawAxis()
  }
}
export { p } from "./utils"
