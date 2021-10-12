import { Point } from './Point'
import { Rect } from './Rect'
import { Size } from './Size'

declare module RotatedRect {
  interface RotatedRect {
    new (): RotatedRect
    new (rect: Rect): RotatedRect
    new (pt: Point, sz: Size): RotatedRect
<<<<<<< HEAD
    new (
      x: number,
      y: number,
      width: number,
      height: number,
    ): RotatedRect
=======
    new (x: number, y: number, width: number, height: number): RotatedRect
>>>>>>> 162d1a36bbc17b3388b5e3862f93bdaa63728312
    points(pts: Point[]): void
    boundingRect(): Rect
    boundingRect2f(): Rect
  }
}
export = RotatedRect
