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
import UserWithNickname from '../components/UserWithNickname.vue'
// import { ocr } from '../libs/tesseract';

const videoRef = ref<HTMLVideoElement>()
const canvasRef = ref<HTMLCanvasElement>()

const friendlyNicknames = ref<ImageBitmap[]>([])
const enemyNicknames = ref<ImageBitmap[]>([])

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

function ocrFromScreenshot() {
  // const destCanvasElem = document.createElement('canvas')
  preprocessingForOCR(canvasRef.value!, canvasRef.value!)

  // 이미지 자르기 using cyphers.sizes.ts

  // 자른 이미지 ocr (1x 2x 3x);

  // {  nicknameCandidates: {1x: {image, string} 2x 3x}[] }


}
</script>

<template>
  <MainLayout>
    <h1>scout</h1>

    <p>
      This example shows you the contents of the selected part of your
      display. Click the Start Capture button to begin.
    </p>

    <p>
      <button @click="startCapture">Start Capture</button>
      <button @click="stopCapture">Stop Capture</button>
      <button @click="screenshot">Screenshot</button>
      <button @click="ocrFromScreenshot">OCR from Screenshot</button>
    </p>

    <div>
      <video class="screen-video" ref="videoRef" autoplay></video>
      <canvas class="screenshot" ref="canvasRef"></canvas>
    </div>

    <div>
      <div>
        <h2>Enemy</h2>
        <UserWithNickname :key="index" v-for="(nickname, index) in enemyNicknames" :bitmap="nickname" />
      </div>
      <div>
        <h2>Friendly</h2>
        <UserWithNickname :key="index" v-for="(nickname, index) in friendlyNicknames" :bitmap="nickname" />
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.screen-video{
  width: 300px;
}
.screenshot {
  width: 300px;
}

</style>
