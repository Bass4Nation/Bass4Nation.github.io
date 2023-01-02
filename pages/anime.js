import Card from "../components/Card";
import Headtitle from "../components/Headtitle";

const watchlistArray = [
  {
    id: 1,
    title: "One Piece",
    text: "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 22, 1997, and has been collected into 98 tankōbon volumes. The story follows the adventures of Monkey D. Luffy",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/One_Piece%2C_Volume_1_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_1_Cover_%28Japanese%29.jpg",
  },
  {
    id: 2,
    title: "Naruto",
    text: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, an adolescent ninja who constantly searches for recognition and dreams to become the Hokage, the ninja in his village who is acknowledged as the leader and the strongest of all.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Naruto%2C_Volume_1_Cover.jpg/220px-Naruto%2C_Volume_1_Cover.jpg",
  },
  {
    id: 3,
    title: "Bleach",
    text: "Bleach is a Japanese manga series written and illustrated by Tite Kubo. Bleach follows the adventures of the hotheaded teenager Ichigo Kurosaki after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki.",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Bleach%2C_Volume_1_Cover.jpg/220px-Bleach%2C_Volume_1_Cover.jpg",
  },
];
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
        {watchlistArray.map((watchlist) => (
            <Card key={watchlist.id} title={watchlist.title} text={watchlist.text} image={watchlist.image} />
        ))}
      </section>
    </>
  );
};

export default anime;
