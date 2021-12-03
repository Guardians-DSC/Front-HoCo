export function compare(a, b) {
  return b.value - a.value
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
