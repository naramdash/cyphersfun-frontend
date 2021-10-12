import Tesseract from 'tesseract.js'

async function ocr(canvasElem: HTMLCanvasElement) {
  const { data } = await Tesseract.recognize(canvasElem, 'kor+eng', {
    workerPath:
      'https://unpkg.com/tesseract.js@v2.0.0/dist/worker.min.js',
    langPath: 'https://tessdata.projectnaptha.com/4.0.0',
    corePath:
      'https://unpkg.com/tesseract.js-core@v2.0.0/tesseract-core.wasm.js',

    logger: (m) => console.log(m),
  })

  alert(data.text)
}

export { ocr }
