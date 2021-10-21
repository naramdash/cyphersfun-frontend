const MAX_WIDTH = 2560
const MAX_HEIGHT = 1080

const displayMediaOptions: any = {
  video: {
    cursor: false,
    height: MAX_HEIGHT,
    width: MAX_WIDTH,
    resizeMode: 'crop-and-scale',
  },
  audio: false,
}

async function startCaptureToVideo(videoElem: HTMLVideoElement) {
  const displayMedia = await navigator.mediaDevices.getDisplayMedia(
    displayMediaOptions,
  )

  videoElem.srcObject = displayMedia
}

function stopCaptureToVideo(videoElem: HTMLVideoElement) {
  const tracks = (videoElem.srcObject as MediaStream).getTracks()

  tracks.forEach((track) => track.stop())
  videoElem.srcObject = null
}

async function screenshotFromVideo(videoElem: HTMLVideoElement) {
  const videoTrack = (
    videoElem.srcObject as MediaStream
  ).getVideoTracks()[0]

  const imageCapture = new ImageCapture(videoTrack)
  const imageBitmap = await imageCapture.grabFrame()
  return imageBitmap
}

export {
  startCaptureToVideo,
  stopCaptureToVideo,
  screenshotFromVideo,
}
