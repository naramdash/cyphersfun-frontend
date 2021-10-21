import { Mat } from '../types/opencv-ts/opencv'

function preprocessingForOCR(imageSource: Mat) {
  const { cols: srcCols, rows: srcRows } = imageSource

  const dst1 = new cv.Mat(srcCols, srcRows, cv.CV_8UC4)
  cv.cvtColor(imageSource, dst1, cv.COLOR_BGR2GRAY)

  const dst2 = new cv.Mat(srcCols, srcRows, cv.CV_8UC4)
  cv.threshold(dst1, dst2, 100, 230, cv.THRESH_BINARY)

  // unused
  const dst3 = new cv.Mat(srcCols, srcRows, cv.CV_8UC4)

  // cv.imshow(imageDestination, dst2)
  return dst2
}

function drawMatInCanvas(mat: Mat, canvasElem: HTMLCanvasElement) {
  cv.imshow(canvasElem, mat)
}
function convertMatToCanvas(mat: Mat): HTMLCanvasElement {
  const canvasElem = document.createElement('canvas')
  cv.imshow(canvasElem, mat)
  return canvasElem
}

async function crop(
  bitmapSource: ImageBitmapSource,
  position: { x: number; y: number; w: number; h: number },
) {
  const imageBitmap = await createImageBitmap(
    bitmapSource,
    position.x,
    position.y,
    position.w,
    position.h,
  )

  return imageBitmap
}

function resize(imageSource: Mat, multiple: number): Mat {
  const { cols: srcCols, rows: srcRows } = imageSource

  console.log('resize: ', multiple)

  const dst0 = new cv.Mat(srcCols, srcRows, cv.CV_8UC4)
  cv.resize(
    imageSource,
    dst0,
    new cv.Size(srcCols * multiple, srcRows * multiple),
  )
  return dst0
}

function renderBitmapInCanvas(
  bitmap: ImageBitmap,
  canvasElem: HTMLCanvasElement,
) {
  canvasElem.width = bitmap.width
  canvasElem.height = bitmap.height
  canvasElem.getContext('2d')!.drawImage(bitmap, 0, 0)
}

function convertBitMapToMat(bitmap: ImageBitmap) {
  const canvasElem = document.createElement('canvas')
  renderBitmapInCanvas(bitmap, canvasElem)
  const mat = cv.imread(canvasElem)
  return mat
}

export {
  crop,
  resize,
  drawMatInCanvas,
  convertMatToCanvas,
  preprocessingForOCR,
  renderBitmapInCanvas,
  convertBitMapToMat,
}
