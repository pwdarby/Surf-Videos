import React, {Component} from 'react';

const VideoCard = (props) => {
  const {
    thumbnail,
    title,
    description,
    index
  } = props;
  return (
    <div key={index}>
      <img src={thumbnail.url} height={thumbnail.height} width={thumbnail.width} />
      <h3>{title}</h3>
      {description}
    </div>
  );
};

export default VideoCard;