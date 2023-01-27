// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useGithubRepo } from "../../hooks/useGithubRepo";
// import { useEffect } from "react";
// import { useGitCommit } from "../../hooks/useGitCommit";
import Headtitle from "../../components/Headtitle";
import Link from "next/link";
import style from "../../styles/GithubRepo.module.css";
import convertTimeToReadable from "../../helpers/convertTimeToReadable";


const Page = ({ data, commit }) => {
  // const router = useRouter();
  // console.log(router?.query?.data);

  // To be able to find is and not become undefined after a refresh.
  // const [id, setId] = useState(router.query.id);
  // useEffect(() => {
  //   setId(router.query.id);
  // }, [router.query.id]);

// console.log(commit);
console.log(data);


   const repoDataView = () => {
    // if (error) return <div>Failed to load</div>;
    // if (loading) return <div>Loading...</div>;
    return (
      <section className={style.repo}>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <p>Created at: {convertTimeToReadable(data.created_at)}</p>
        <p>Last Updated at : {convertTimeToReadable(data.updated_at)}</p>
        <p>Main Language: {data.language}</p>
        <p>Size: {data.size}</p>
        <p>Default branch: {data.default_branch}</p>
        <Link href={data?.html_url}>Go to Github</Link>

      </section>
    );
  };

  // const { commit, commit_error, commit_loading } = useGitCommit(data?.owner?.login, data?.name);


  const commitMessages = () => {
    // console.log(commit);
    // if (commit_loading) return <div>Loading...</div>;
    // if (commit_error) return <div>Failed to load</div>;
    return commit.map((commit) => {
      return (
        <section key={commit.sha} className={style.commit}>
          <p>{commit?.commit?.message}</p>
          <p>Author: {commit?.commit?.author?.name}</p>
          <p>Committer: {commit?.commit?.committer?.name}</p>
          <p>Committed at: {convertTimeToReadable(commit?.commit?.committer?.date)}</p>
        </section>
      );
    });
  };

  return (
    <section>
      <Headtitle title={data.name} />
      <section>
        {repoDataView()}
      </section>
      <section className={style.commits}>
        <h2>Commits</h2>
        {commitMessages()}
      </section>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const res = await fetch(`https://api.github.com/repositories/${id}`);
  const data = await res.json();

  const commit_res = await fetch(`https://api.github.com/repos/${data.owner.login}/${data.name}/commits`);
  const commit = await commit_res.json();

  return {
    props: {
      data,
      commit
    },
  };
};

export default Page;


