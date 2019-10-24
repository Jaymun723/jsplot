import { Plot } from "../lib"

const plot = new Plot({
  ratio: 20,
})
document.body.appendChild(plot.canvas)

const genPoints = (nums: number[]) => nums.map((num, i) => ({ x: i, y: num }))
const points = genPoints([5, 6, 7, 2, 9, 4, 3])

// @ts-ignore
window.plot = plot

plot.drawPoints(points)
plot.drawLine(2, 1)
