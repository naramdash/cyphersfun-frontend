<script setup lang="ts">
import { ref } from '@vue/reactivity'
import MainLayout from '../layouts/MainLayout.vue'
import { renderBitmapInCanvas } from '../libs/image'
import {
  startCaptureToVideo,
  stopCaptureToVideo,
  screenshotFromVideo,
} from '../libs/screen'
import UserWithNickname from '../components/UserWithNickname.vue'
import { getNicknameBitmapsfromLoadingScreenshot } from '../libs/cyphers/onLoadGame/screen'

const videoRef = ref<HTMLVideoElement>()
const canvasRef = ref<HTMLCanvasElement>()

const screenshot = ref<ImageBitmap>()
const friendlyNicknames = ref<ImageBitmap[]>([])
const enemyNicknames = ref<ImageBitmap[]>([])

function startCapture() {
  startCaptureToVideo(videoRef.value!)
}

function stopCapture() {
  stopCaptureToVideo(videoRef.value!)
}

async function takeScreenshot() {
  const screenshotBitmap = await screenshotFromVideo(videoRef.value!)
  screenshot.value = screenshotBitmap
  renderBitmapInCanvas(screenshotBitmap, canvasRef.value!)
}

async function getNicknames() {
  if(screenshot.value)
  {
    const bitmaps = await getNicknameBitmapsfromLoadingScreenshot(screenshot.value)
    if(bitmaps === undefined) {
      alert("error")
      return
    }
    enemyNicknames.value = bitmaps.enemies
    friendlyNicknames.value = bitmaps.friendly
  }
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
      <button @click="takeScreenshot">Screenshot</button>
      <button @click="getNicknames">Get Nicknames</button>
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
