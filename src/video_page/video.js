import React from "react";

const Video = props => {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.match.params.id}`}
      frameBorder="0"
      allowFullScreen
    />
  );
};

export default Video;
