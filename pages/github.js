import GithubCard from "../components/GithubCard";
import { useGit } from "../hooks/useGithub";

const Github = () => {
  const { user, allRepo } = useGit();

  console.log(allRepo);
  return (
    <>
      <h1>GitHub</h1>
      <p>Some info about me available in github</p>
      <section>
        <h2>My GitHub profile</h2>
        <p>
          <img src={user?.avatar_url} alt="My GitHub profile" />
        </p>
        <p>
          <a href={user?.html_url}>My GitHub profile</a>
        </p>
        <p>
          <strong>Username:</strong> {user?.login}
        </p>
        <p>
          <strong>Actual name:</strong> {user?.name}
        </p>
        <p>
          <strong>Public repos:</strong> {user?.public_repos}
        </p>
        <p>
          <strong>Public gists:</strong> {user?.public_gists}
        </p>
        <p>
          <strong>Created at:</strong> {user?.created_at}
        </p>
        <p>
          <strong>Updated at:</strong> {user?.updated_at}
        </p>
      </section>
      <section>
        <p>Here&apos;s a list of my GitHub repositories that are public:</p>
        <p>Not every repo is complete but here you can see some of my crafts</p>
        <ul>
          {allRepo &&
            allRepo.map((repo) => (
                <GithubCard repo={repo} key={repo.id} />
            ))}
        </ul>
      </section>
    </>
  );
};

export default Github;
