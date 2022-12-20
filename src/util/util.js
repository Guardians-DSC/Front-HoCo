export function compare(a, b) {
  return Number(b.category_piece) - Number(a.category_piece)
}

export const filterRepositoriesNames = (repositories) => {
  const regex = /HoCo/
  const filtredRepositories = repositories.filter((repository) =>
    repository.full_name.match(regex)
  )

  return filtredRepositories.map((repository) => repository.full_name)
}

export const formatFileName = (fileName) => {
  const charLimit = 30
  const stringList = fileName.split('.')

  if (stringList[0].length > charLimit) {
    return stringList[0].slice(0, charLimit) + '...' + stringList.at(-1)
  }

  return fileName
}

export function create_UUID() {
  var dt = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0
    dt = Math.floor(dt / 16)
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}
