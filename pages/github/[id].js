import { useRouter } from "next/router";
import { useState } from "react";
import { useGit } from "../../hooks/useGithub";
import findGitRepoWithId from "../../helpers/findGitRepoWithId";

const Page = () => {
  const router = useRouter();
  const { data } = router.query;
  const [repo, setRepo] = useState([]);

  const { allRepo } = useGit();

  if (allRepo) {
    allRepo.map((rep) => {
      if (rep.id === data) {
        setRepo(rep);
      }
    });
  }

  //   const repo = findGitRepoWithId(allRepo, data);
  console.log(repo);

  return (
    <section>
      <p>Data from last page: {data}</p>
    </section>
  );
};

export default Page;
