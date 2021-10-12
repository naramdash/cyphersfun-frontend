// const imageBitmap = await createImageBitmap(
//     imageBitmap2,
//     100,
//     200,
//     500,
//     500
//   );

// import cv from "opencv-ts";
// import cvd from '../opencv-ts/src/opencv'
// const cv = (globalThis as any).cv as cvd;
// import cv from '@techstark/opencv-js'
// import cv from '../opencv-ts/src/opencv'

function preprocessingForOCR(
  imageSource: HTMLCanvasElement,
  imageDestination: HTMLCanvasElement,
) {
  const imgInCv = cv.imread(imageSource)

  const dst0 = new cv.Mat(imgInCv.cols, imgInCv.rows, cv.CV_8UC4)

  cv.resize(
    imgInCv,
    dst0,
    new cv.Size(imgInCv.cols * 1, imgInCv.rows * 1),
  )

  const dst1 = new cv.Mat(imgInCv.cols, imgInCv.rows, cv.CV_8UC4)
  cv.cvtColor(dst0, dst1, cv.COLOR_BGR2GRAY)
  const dst2 = new cv.Mat(imgInCv.cols, imgInCv.rows, cv.CV_8UC4)
  cv.threshold(dst1, dst2, 100, 230, cv.THRESH_BINARY)
  const dst3 = new cv.Mat(imgInCv.cols, imgInCv.rows, cv.CV_8UC4)

  cv.imshow(imageDestination, dst2)
}

export { preprocessingForOCR }
