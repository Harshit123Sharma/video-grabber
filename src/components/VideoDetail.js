import React from "react";

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div className="ui active centered inline loader"></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
          <div className="ui embed">
              <iframe src={videoSrc} title="video player" />
          </div>
        <div className="ui inverted segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
};

export default VideoDetail;