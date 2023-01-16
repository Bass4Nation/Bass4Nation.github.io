

const findGitRepoWithId = ({gitRepos, id}) => {
    console.log(gitRepos);
    const repo = gitRepos.map((repo) => {if (repo.id === id) return repo});
    return repo;
};


export default findGitRepoWithId;