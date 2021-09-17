export const filterRepositoriesNames = (repositories) => {
    const regex = /HoCo/;
    const filtredRepositories = repositories.filter(
        (repository) => repository.full_name.match(regex)
    );

    return filtredRepositories.map((repository) => repository.full_name);
}
