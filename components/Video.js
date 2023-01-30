import style from "../styles/Video.module.css";


const Video = ({ video_url, video_title }) => {
  return (
    <section key={video_url}>
      <h3>{video_title}</h3>
      <iframe
        width="560"
        height="315"
        src={video_url}
        title={video_title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={style.video}
      ></iframe>
    </section>
  );
};

export default Video;
