import { useState, useEffect } from "react";

export const useGitCommit = ( userName, repo ) => {
  const [commit, setCommit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.github.com/repos/${userName}/${repo}/commits`
      );
      const data = await res.json();
      setCommit(data);
    };

    fetchData();
  }, []);

  const loading = "Loading....";

  if (!commit) {
    return loading;
  }

  return { commit };
};
