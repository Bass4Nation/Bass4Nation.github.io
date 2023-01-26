import GithubCard from "../components/GithubCard";
import GithubProfile from "../components/GithubProfile";
import { useGit } from "../hooks/useGithub";
import Headtitle from "../components/Headtitle";
import cardstyle from "../styles/GithubCard.module.css";
const Github = () => {
  const { user, allRepo } = useGit();


  //   console.log(allRepo);
  return (
    <>
      <Headtitle title="GitHub" />
      <section>
        <GithubProfile user={user} />
      </section>
      <section>
        <section className={cardstyle.all_cards}>
          {allRepo &&
            allRepo.map((repo) => <GithubCard repo={repo} key={repo.id} />)}
        </section>
      </section>
    </>
  );
};

export default Github;
