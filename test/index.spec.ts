import nearestPoint from '../src/index'
import { Point } from '../src/types'

type TestCase = {
  i: {
    point: Point,
    points: Point[]
  },
  o: Point
}

const tests: TestCase[] = [
  {
    i: {
      point: {x: 10, y: 10},
      points: [{x: 11, y: 11}, {x: 21, y: 21}]
    },
    o: {x: 11, y: 11}
  },
  {
    i: {
      point: {x: 10, y: 10},
      points: [{x: 31, y: 31}, {x: 21, y: 21}]
    },
    o: {x: 21, y: 21}
  },
  {
    i: {
      point: {x: 10, y: 10},
      points: [{x: 31, y: 31}, {x: 5, y: 10}]
    },
    o: {x: 5, y: 10}
  },
  {
    i: {
      point: {x: 10, y: 10},
      points: [{x: 31, y: 31}, {x: 5, y: 10}, {x: 11, y: -11}, {x: 21, y: 21}]
    },
    o: {x: 5, y: 10}
  },
  {
    i: {
      point: {x: 10, y: 10},
      points: [{x: 31, y: 31}, {x: 5, y: 10}, {x: 11, y: -11}, {x: 10, y: 10}]
    },
    o: {x: 10, y: 10}
  },
]

describe("index tests", () => {
  it.each(tests)("finds the nearest point (%#)", test => {
    const { i, o } = test;
    const { point, points } = i

    const result = nearestPoint(point, points)

    expect(result).toEqual(o);
  })
})