import { useEffect, useState } from "react";

export const useGit = () => {
  const [user, setUser] = useState(null);  // user is an object
  const [allRepo, setAllRepo] = useState(null);  // allRepo is an array


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/users/Bass4Nation`);
      const data = await res.json();
      setUser(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/users/Bass4Nation/repos`);
      const data = await res.json();
      setAllRepo(data);
    };

    fetchData();
  }, []);

  const loading = "Loading....";  // loading is a string that is used to display a loading message

  if (!user) {
    return loading;
  }

  return { user, allRepo }; // user and allRepo are returned as an object
};
