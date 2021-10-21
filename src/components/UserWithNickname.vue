<script setup lang="ts">
import { ref, toRefs } from '@vue/reactivity';
import { watchEffect } from '@vue/runtime-core';
import { ocrFromNicknameSection } from '../libs/cyphers/ocr';
import { renderBitmapInCanvas } from '../libs/image';

const props = defineProps<{
    bitmap: ImageBitmap
}>()
const { bitmap } = toRefs(props)

const canvasRef = ref<HTMLCanvasElement>()
const nickname = ref("")
const isBusy = ref(false)

async function ocrWithMultiple(multiple?: number) {
    isBusy.value = true
    const result = await ocrFromNicknameSection(bitmap.value, multiple)
    isBusy.value = false
    nickname.value = result
}


watchEffect(() => {
    ocrWithMultiple()
})

watchEffect(() => {
    if(canvasRef.value)
        renderBitmapInCanvas(bitmap.value, canvasRef.value)
})

</script>

<template>
    <div class="container">
        <canvas class="nickname" ref="canvasRef"></canvas>
        <h1>{{isBusy ? "💦" : "⭕"}} {{nickname}}</h1>
        <input v-model.lazy="nickname" />
        <button v-for="n in 10" type="button" @click="ocrWithMultiple(n)">
            x {{ n }}
        </button>
    </div>
</template>

<style scoped>
    .container {
        border: 3px solid red;
        margin-bottom: 20px;
    }
    canvas.nickname {
        width: 300px;
    }
</style>