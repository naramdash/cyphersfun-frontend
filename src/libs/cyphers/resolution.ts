const SupportedResolutions = [
  // '1024*768'
  // '1152*864'
  // '1280*960'
  // '1280*1024'
  '1366*768',
  '1440*900',
  '1600*900',
  '1680*1050',
  '1920*1080',
  '2560*1080',
] as const

type SupportedResolution = typeof SupportedResolutions[number]

function isSupportedResolution(
  resolution: string,
): resolution is SupportedResolution {
  return (SupportedResolutions as readonly string[]).includes(
    resolution,
  )
}

export { SupportedResolution, isSupportedResolution }
