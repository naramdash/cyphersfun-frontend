<script setup lang="ts">
import { ref } from '@vue/reactivity'

import MainLayout from '../layouts/MainLayout.vue'
import { preprocessingForOCR } from '../libs/image'

import {
  startCaptureToVideo,
  stopCaptureToVideo,
  screenshotFromVideo,
  renderBitmapInCanvas,
} from '../libs/screen'
// import { ocr } from '../libs/tesseract';

const videoRef = ref<HTMLVideoElement>()
const canvasRef = ref<HTMLCanvasElement>()

function startCapture() {
  startCaptureToVideo(videoRef.value!)
}

function stopCapture() {
  stopCaptureToVideo(videoRef.value!)
}

async function screenshot() {
  const screenshotBitmap = await screenshotFromVideo(videoRef.value!)
  await renderBitmapInCanvas(screenshotBitmap, canvasRef.value!)
}

async function ocrFromScreenshot() {
  const destCanvasElem = document.createElement('canvas')
  preprocessingForOCR(canvasRef.value!, canvasRef.value!)

  // ocr(destCanvasElem);
}
</script>

<template>
  <MainLayout>
    <h1>scout</h1>

    <p>
      This example shows you the contents of the selected part of your display. Click the Start
      Capture button to begin.
    </p>

    <p>
      <button @click="startCapture">Start Capture</button>
      <button @click="stopCapture">Stop Capture</button>
      <button @click="screenshot">Screenshot</button>
      <button @click="ocrFromScreenshot">OCR from Screenshot</button>
    </p>

    <div>
      <video ref="videoRef" style="width: 300px" autoplay></video>
      <canvas ref="canvasRef"></canvas>
    </div>
  </MainLayout>
</template>

<style scoped></style>
