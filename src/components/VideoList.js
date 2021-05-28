import React from "react";
import VideoITem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
        <VideoITem 
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video} 
        />
        );
    });

    return(
        <div className="ui inverted relaxed divided list">
            {renderedList}
        </div>
    );
}

export default VideoList;