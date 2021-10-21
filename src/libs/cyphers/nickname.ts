function filterOutRawByNicknameRule(raw: string): string {
  const filtered = raw.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣1-9]+/g, '')
  return filtered
}

export { filterOutRawByNicknameRule }
