import { Mat } from '../core/Mat'

declare module BackgroundSubtractorMOG2 {
  interface BackgroundSubtractorMOG2 {
<<<<<<< HEAD
    new (
      image: number,
      fgmask: Mat | number,
      learningRate: boolean,
    ): BackgroundSubtractorMOG2
=======
    new (image: number, fgmask: Mat | number, learningRate: boolean): BackgroundSubtractorMOG2
>>>>>>> 162d1a36bbc17b3388b5e3862f93bdaa63728312
    apply(image: Mat, dst: Mat): void
    getBackgroundImage(backgroundImage: Mat): void
  }
}
export = BackgroundSubtractorMOG2
