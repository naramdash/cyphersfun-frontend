type NicknameSection = {
  x: number
  y: number
  w: number
  h: number
}

type NicknameSectionsOnLoad = {
  friendly: [
    NicknameSection,
    NicknameSection,
    NicknameSection,
    NicknameSection,
    NicknameSection,
  ]
  enemy: [
    NicknameSection,
    NicknameSection,
    NicknameSection,
    NicknameSection,
    NicknameSection,
  ]
}

type Detail = {
  nicknameSectionsOnLoad: NicknameSectionsOnLoad
}
const Size: Record<string, Detail> = {
  // '1024*768': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
  // '1152*864': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
  // '1280*960': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
  // '1280*1024': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
  // '1366*768': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
  // '1440*900': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
  // '1600*900': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
  // '1680*1050': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
  // '1920*1080': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
  // '2560*1080': {
  //   nicknameSectionsOnLoad: {
  //     enemy: [],
  //     friendly: [],
  //   },
  // },
}
