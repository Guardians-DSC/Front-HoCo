export function compare(a, b) {
  if (a.last_nom < b.last_nom) {
    return -1
  }
  if (a.last_nom > b.last_nom) {
    return 1
  }
  return 0
}

export const filterRepositoriesNames = (repositories) => {
  const regex = /HoCo/
  const filtredRepositories = repositories.filter((repository) =>
    repository.full_name.match(regex)
  )

  return filtredRepositories.map((repository) => repository.full_name)
}
