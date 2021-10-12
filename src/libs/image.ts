async function cropImagesFromImage(
  origin: ImageBitmap,
  sections: { x: number; y: number; w: number; h: number }[],
) {
  const ps = sections.map((s) => createImageBitmap(origin, s.x, s.y, s.w, s.h))
  const results = await Promise.all(ps)
  return results
}

function preprocessingForOCR(
  imageSource: HTMLCanvasElement,
  imageDestination: HTMLCanvasElement,
  resize: number = 1,
) {
  const imgInCv = cv.imread(imageSource)

  // resize
  const dst0 = new cv.Mat()
  cv.resize(imgInCv, dst0, new cv.Size(imgInCv.cols * resize, imgInCv.rows * resize))

  // grayscale
  const dst1 = new cv.Mat()
  cv.cvtColor(dst0, dst1, cv.COLOR_BGR2GRAY)

  // threshold
  const dst2 = new cv.Mat()
  cv.threshold(dst1, dst2, 100, 230, cv.THRESH_BINARY)

  // asefoijsaf
  // const dst3 = new cv.Mat(imgInCv.cols, imgInCv.rows, cv.CV_8UC4);

  // output
  cv.imshow(imageDestination, dst2)
}

export { cropImagesFromImage, preprocessingForOCR }
