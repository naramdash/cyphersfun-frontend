const displayMediaOptions: any = {
    video: {
        cursor: "always",
        height: 1080,
        width: 2560,
    },
    audio: false,
};

async function startCaptureToVideo(videoElem: HTMLVideoElement) {
    videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
    );
}

function stopCaptureToVideo(videoElem: HTMLVideoElement) {
    const tracks = (videoElem.srcObject as MediaStream).getTracks();

    tracks.forEach((track) => track.stop());
    videoElem.srcObject = null;
}

async function screenshotFromVideo(videoElem: HTMLVideoElement) {
    const videoTrack = (
        videoElem.srcObject as MediaStream
    ).getVideoTracks()[0];

    const imageCapture = new ImageCapture(videoTrack);
    const imageBitmap = await imageCapture.grabFrame();
    return imageBitmap
}

async function renderBitmapInCanvas(bitmap: ImageBitmap, canvasElem: HTMLCanvasElement) {
    canvasElem.width = bitmap.width
    canvasElem.height = bitmap.height
    canvasElem.getContext("2d")!.drawImage(bitmap, 0, 0);
}

export {
    startCaptureToVideo,
    stopCaptureToVideo,
    screenshotFromVideo,
    renderBitmapInCanvas
}