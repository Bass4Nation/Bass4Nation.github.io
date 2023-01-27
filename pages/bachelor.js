import Headtitle from "../components/HeadTitle";
import axios from "axios";

const youtubeVideos = [
  {
    url: "https://www.youtube.com/embed/XcOUiR2Fv8k",
    title: "F1tenth bilen/manuell kontroll",
  },
  {
    url: "https://www.youtube.com/embed/oD8W9GbfgoY",
    title: "safety brake",
  },
];

const Bachelor = () => {

  const data = { name: 'John Doe', age: 30 };

  const handleSubmit = async () => {
    const res = await axios.post('/api/hello', data);
    console.log(res.data);
  };


  return (
    <section>
        <Headtitle title="Bachelor Thesis" />
      <h1>Bachelor</h1>
      <button onClick={handleSubmit}>Write to JSON</button>
      <p>This page is about my bachelor.</p>
      <section>
        <h2>My bachelor assignment</h2>
        <p>
          The bachelor assignment was to create a self driving rc car that would
          create a map.
        </p>
      </section>
      <section>
        <h2>Some videos I documented when working on the bachelor assignment</h2>
        <section>
          {youtubeVideos.map((video) => (
            <section key={video.url}>
              <h3>{video.title}</h3>
              <iframe
                width="560"
                height="315"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Bachelor;
