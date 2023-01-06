import Headtitle from "../components/Headtitle";
import AnimeList from "../components/AnimeList";

const anime = () => {

  return (
    <>
      <Headtitle title="Anime watchlist - bass4nation.github.io" />
      <div>
        <h1>Anime watchlist</h1>
        <p>
          This page is using Anilist.co API. Just wanted integrated a API to
          this page
        </p>
        <p>Not integrated YET</p>
      </div>
      <section>
        <AnimeList />
      </section>
    </>
  );
};

export default anime;
