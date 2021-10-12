const displayMediaOptions: any = {
  video: {
    cursor: 'always',
    height: 1080,
    width: 2560,
  },
  audio: false,
}

async function startCaptureToVideo(videoElem: HTMLVideoElement) {
<<<<<<< HEAD
  videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(
    displayMediaOptions,
  )
=======
  videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
>>>>>>> 162d1a36bbc17b3388b5e3862f93bdaa63728312
}

function stopCaptureToVideo(videoElem: HTMLVideoElement) {
  const tracks = (videoElem.srcObject as MediaStream).getTracks()

  tracks.forEach((track) => track.stop())
  videoElem.srcObject = null
}

async function screenshotFromVideo(videoElem: HTMLVideoElement) {
<<<<<<< HEAD
  const videoTrack = (
    videoElem.srcObject as MediaStream
  ).getVideoTracks()[0]
=======
  const videoTrack = (videoElem.srcObject as MediaStream).getVideoTracks()[0]
>>>>>>> 162d1a36bbc17b3388b5e3862f93bdaa63728312

  const imageCapture = new ImageCapture(videoTrack)
  const imageBitmap = await imageCapture.grabFrame()
  return imageBitmap
}

<<<<<<< HEAD
async function renderBitmapInCanvas(
  bitmap: ImageBitmap,
  canvasElem: HTMLCanvasElement,
) {
=======
async function renderBitmapInCanvas(bitmap: ImageBitmap, canvasElem: HTMLCanvasElement) {
>>>>>>> 162d1a36bbc17b3388b5e3862f93bdaa63728312
  canvasElem.width = bitmap.width
  canvasElem.height = bitmap.height
  canvasElem.getContext('2d')!.drawImage(bitmap, 0, 0)
}

<<<<<<< HEAD
export {
  startCaptureToVideo,
  stopCaptureToVideo,
  screenshotFromVideo,
  renderBitmapInCanvas,
}
=======
export { startCaptureToVideo, stopCaptureToVideo, screenshotFromVideo, renderBitmapInCanvas }
>>>>>>> 162d1a36bbc17b3388b5e3862f93bdaa63728312
