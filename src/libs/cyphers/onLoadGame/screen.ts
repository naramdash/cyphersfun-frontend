import { crop } from '../../image'
import { getSectionsFromResolution } from '../onLoadGame/nicknamePosition'
import {
  isSupportedResolution,
  SupportedResolution,
} from '../resolution'

async function getNicknameBitmapsfromLoadingScreenshot(
  screenshot: ImageBitmap,
) {
  const width = screenshot.width
  const height = screenshot.height
  const resolution = `${width}*${height}`

  const isSupported = isSupportedResolution(resolution)
  if (isSupported === false) return

  const sectionInfos = getSectionsFromResolution(
    resolution as SupportedResolution,
  )

  const allSectionInfos = [
    ...sectionInfos.enemies,
    ...sectionInfos.friendly,
  ]

  const allSections = await Promise.all(
    allSectionInfos.map((sectionInfo) =>
      crop(screenshot, sectionInfo),
    ),
  )

  return {
    enemies: allSections.slice(0, 5),
    friendly: allSections.slice(5, 10),
  }
}

export { getNicknameBitmapsfromLoadingScreenshot }
