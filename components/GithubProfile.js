import convertTimeToReadable from "../helpers/convertTimeToReadable";
import style from "../styles/GithubProfile.module.css";

const GithubProfile = ({ user }) => {
  //   console.log(user);
  return (
    <section className={style.profileCard}>
      <p>
        <a href={user?.html_url}>My GitHub profile</a>
      </p>
      <p>
        <img src={user?.avatar_url} alt="My GitHub profile picture" />
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
        <strong>Created at:</strong> {convertTimeToReadable(user?.created_at)}
      </p>
      <p>
        <strong>Updated at:</strong> {convertTimeToReadable(user?.updated_at)}
      </p>
    </section>
  );
};

export default GithubProfile;
