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
      <h1>GitHub</h1>
      <p>Some info about me available in github</p>
      {/* <button onClick={""}> Update Github info</button> */}
      <section>
        <GithubProfile user={user} />
      </section>
      <section>
        <p>Here&apos;s a list of my GitHub repositories that are public:</p>
        <p>Not every repo is complete but here you can see some of my crafts</p>
        <ul className={cardstyle.all_cards}>
          {allRepo &&
            allRepo.map((repo) => <GithubCard repo={repo} key={repo.id} />)}
        </ul>
      </section>
    </>
  );
};

export default Github;
