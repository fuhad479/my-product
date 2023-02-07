import "./index.scss";

export default function VideoPopup({ setVideoPopup }) {
  return (
    <div className="video-popup" onClick={() => setVideoPopup(false)}>
      <div className="placeholder">
        <iframe
          width="760"
          height="490"
          src="https://www.youtube.com/embed/u6gSSpfsoOQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
