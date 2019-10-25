import { Plot, p } from "../lib"

const plot = new Plot({
  ratio: 20,
})
document.body.appendChild(plot.canvas)

const genPoints = (nums: number[]) => nums.map((num, i) => ({ x: i, y: num }))
const points = genPoints([5, 6, 7, 2, 9, 4, 3])
const endArr = (i: number, arr: any[]) => arr[arr.length + i]

// @ts-ignore
window.plot = plot

plot.onClick = (p) => {
  points.push(p)
  draw()
}

const draw = () => {
  plot.clear()
  plot.drawSegment(endArr(-1, points), endArr(-2, points))
  plot.drawPoints(points)
  plot.drawLine(2, 1)
}
draw()
