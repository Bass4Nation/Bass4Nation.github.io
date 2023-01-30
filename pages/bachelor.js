import Headtitle from "../components/Headtitle";
import Video from "../components/Video";
import bachelorTextEn from "./api/data/bachelor";

// const youtubeVideos = [
//   {
//     url: "https://www.youtube.com/embed/XcOUiR2Fv8k",
//     title: "F1tenth bilen/manuell kontroll",
//   },
//   {
//     url: "https://www.youtube.com/embed/oD8W9GbfgoY",
//     title: "safety brake",
//   },
// ];

const Bachelor = () => {
  return (
    <section>
      <Headtitle title="Bachelor Thesis" />
      <h1>Bachelor</h1>
      <p>This page is about my bachelor.</p>
      {bachelorTextEn.map((text) => (
        <section key={text.id}>
          <h2>{text.title}</h2>
          <p>{text.text}</p>
          {text.video && (
            <Video
              video_url={text.video.url}
              video_title={text.video.title}
              key={text.video.title}
            />
          )}
        </section>
      ))}

      <section>
        <h2>Download my bachelor thesis</h2>
        <a
          href="downloads/Bachelor_hovedrapport.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button>Download it here</button>
        </a>

      </section>
    </section>
  );
};

export default Bachelor;
