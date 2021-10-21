import { SupportedResolution } from '../resolution'

type NicknameSectionsOnLoad = {
  w: number
  h: number

  yEnemy: number
  yFriendly: number

  xs: number[]
}

const NicknameSectionInfosOnLoadByResolution: Record<
  SupportedResolution,
  NicknameSectionsOnLoad
> = {
  '1366*768': {
    w: 135,
    h: 22,
    yEnemy: 273,
    yFriendly: 654,
    xs: [437, 587, 737, 887, 1037],
  },

  '1440*900': {
    w: 158,
    h: 25,
    yEnemy: 320,
    yFriendly: 767,
    xs: [432, 607, 783, 959, 1135],
  },
  '1600*900': {
    w: 158,
    h: 25,
    yEnemy: 320,
    yFriendly: 767,
    xs: [511, 687, 863, 1039, 1214],
  },
  '1680*1050': {
    w: 186,
    h: 30,
    yEnemy: 373,
    yFriendly: 894,
    xs: [503, 708, 913, 1118, 1324],
  },
  '1920*1080': {
    w: 193,
    h: 32,
    yEnemy: 383,
    yFriendly: 919,
    xs: [612, 823, 1033, 1245, 1456],
  },
  '2560*1080': {
    w: 193,
    h: 32,
    yEnemy: 383,
    yFriendly: 919,
    xs: [932, 1143, 1355, 1565, 1776],
  },
}

function getSectionsFromResolution(resolution: SupportedResolution) {
  const SectionInfo =
    NicknameSectionInfosOnLoadByResolution[resolution]
  const enemies = SectionInfo.xs.map((x) => ({
    x,
    y: SectionInfo.yEnemy,
    w: SectionInfo.w,
    h: SectionInfo.h,
  }))
  const friendly = SectionInfo.xs.map((x) => ({
    x,
    y: SectionInfo.yFriendly,
    w: SectionInfo.w,
    h: SectionInfo.h,
  }))

  return {
    enemies,
    friendly,
  }
}

export { getSectionsFromResolution }
