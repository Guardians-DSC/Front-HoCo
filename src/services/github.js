import axios from 'axios'

const GITHUB_API_URL = 'https://api.github.com'

const APIGithub = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const github = {
  async getAllRepositoriesFromOrganization() {
    const response = await APIGithub.get('/orgs/guardians-dsc/repos')
    return response.data
  },
  async getContributorsFromRepository(repositoryName) {
    const response = await APIGithub.get(`/repos/${repositoryName}/contributors`)
    return response
  },
  async getAllHocoContributors(repositoriesNames) {
    let contributors = Promise.all(
      repositoriesNames.map((name) => this.getContributorsFromRepository(name))
    ).then((values) => {
      const allUsers = [].concat(...values.map((value) => [...value.data]))

      const users = {}
      allUsers.map(
        (user) =>
          (users[user.login] = {
            imageUrl: user.avatar_url,
            profileUrl: user.html_url,
          })
      )

      return users
    })

    return contributors
  },
}
