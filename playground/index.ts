import { Plot, p } from "../lib"

const plot = new Plot({
  ratio: 20,
})
document.body.appendChild(plot.canvas)

const genPoints = (nums: number[]) => nums.map((num, i) => ({ x: i, y: num }))
const points = genPoints([5, 6, 7, 2, 9, 4, 3])

// @ts-ignore
window.plot = plot

plot.drawSegment(p(0, 0), p(5, 5))
plot.drawPoints(points)
plot.drawLine(2, 1)
