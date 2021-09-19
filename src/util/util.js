export function compare(a, b) {
  if (a.last_nom < b.last_nom) {
    return -1
  }
  if (a.last_nom > b.last_nom) {
    return 1
  }
  return 0
}
