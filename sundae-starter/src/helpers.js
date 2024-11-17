export function kebabToTitleCase(str) {
  const strWithSpaces = str.replaceAll('-', ' ')
  return strWithSpaces.replace(/\b([a-z])/g, (char) => char.toUpperCase())
}
