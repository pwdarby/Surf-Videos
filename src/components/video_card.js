import React from "react";
import { Link } from "react-router-dom";

const VideoCard = props => {
  const { snippet, id } = props;
  const thumbnail = snippet.thumbnails.default;
  const videoURL = `/video_${id}`;
  return (
    <Link to={videoURL}>
      <div>
        <img
          src={thumbnail.url}
          height={thumbnail.height}
          width={thumbnail.width}
        />
        <h3>{snippet.title}</h3>
        {snippet.description}
      </div>
    </Link>
  );
};

export default VideoCard;
