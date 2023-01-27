import { useGitCommit } from "../hooks/useGitCommit";
import convertTimeToReadable from "../helpers/convertTimeToReadable";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/GithubCard.module.css";

const GithubCard = ({ repo }) => {
  //   const { commit } = useGitCommit(repo.owner.login, repo.name);
  const router = useRouter();
  //   console.log(commit);
  const [showFront, setShowFront] = useState(true);
  // console.log(showFront);

  const cardFace = () => {
    return (
      <section className={styles.cardFace} >
        <section className={styles.front} key={repo.id}>
          <h2>{repo.name}</h2>
        </section>
      </section>
    );
  };

  const cardBack = () => {
    return (
      <section className={styles.cardFace}>
        <section className={styles.back} key={repo.id}>
          {/* <a href={repo.html_url}>{repo.name}</a> */}
          <h2>{repo.name}</h2>
          {repo.description !== null && <p>Description: {repo.description}</p>}
          {/* <p>Created at: {convertTimeToReadable(repo.created_at)}</p> */}
          <p>Last Updated at : {convertTimeToReadable(repo.updated_at)}</p>
          <p>Main Language: {repo.language}</p>
          {/* <p>Size: {repo.size}</p> */}
          {/* <p>Default branch: {repo.default_branch}</p> */}
          <Link
            href={`/github/${repo.id}`}
            onClick={(e) => {
              e.preventDefault();
              router.push(
                {
                  pathname: "/github/[id]",
                  query: { data: repo.id },
                },
                `/github/${repo.id}`
              );
            }}
          >
            Read more
          </Link>
        </section>
      </section>
    );
  };

  return (
    <>
      <section
        className={styles.cardFace}
        onClick={() => setShowFront(!showFront)}
      >
        {showFront ? cardFace() : cardBack()}
      </section>
      {/* <section>
        {commit &&
          commit.map((commit) => (
            <li key={commit.sha}>
              <p>Commit message: {commit.commit.message}</p>
              <p>
                Commit date:{" "}
                {convertTimeToReadable(commit.commit.committer.date)}
              </p>
            </li>
          ))}
      </section> */}
    </>
  );
};

export default GithubCard;
