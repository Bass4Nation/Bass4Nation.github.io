import { useState, useEffect } from "react";

export const useGitCommit = (userName, repo) => {
  const [commit, setCommit] = useState(null);
  const [commit_error, setError] = useState(null);
  const [commit_loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.github.com/repos/${userName}/${repo}/commits`
        );
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        if (!data) throw new Error("No data received from API");
        setCommit(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { commit, commit_error, commit_loading };
};
