import {
  convertBitMapToMat,
  convertMatToCanvas,
  preprocessingForOCR,
  resize,
} from '../image'
import { ocr } from '../tesseract'
import { filterOutRawByNicknameRule } from './nickname'

const DefaultResizeMultipleValue = 5

async function ocrFromNicknameSection(
  nicknameBitmap: ImageBitmap,
  resizeMultiple: number = DefaultResizeMultipleValue,
) {
  const originMat = convertBitMapToMat(nicknameBitmap)
  const resizedMat = resize(originMat, resizeMultiple)
  const preprocessedMat = preprocessingForOCR(resizedMat)
  const preprocessedCanvas = convertMatToCanvas(preprocessedMat)

  const text = await ocr(preprocessedCanvas)
  const filteredText = filterOutRawByNicknameRule(text)
  return filteredText
}

export { ocrFromNicknameSection }
