import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// ToDo - styling
// ToDo - play around with the API, what data should we be passing to the video page?
const VideoCard = props => {

  //ToDo - propTypes, defaultProps
  const { snippet, id} = props;
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
