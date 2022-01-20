import { Point } from './types'

const distance = (a: Point, b: Point) => {
  const diffX = a.x - b.x;
  const diffY = a.y - b.y;
  return Math.sqrt(diffX*diffX + diffY*diffY);
}

export default (point: Point, points: Point[]): [Point, number] => {
  let minDistance = null;
  let nearestPoint = null;

  points.forEach(p => {
    const d = distance(p, point);

    if (minDistance === null || minDistance >= d){
      minDistance = d;
      nearestPoint = p;
    }
  })

  return [nearestPoint, Math.round(minDistance*100)/100];
}

export * from './types';