import React from "react";
import VideoCard from "./video_card";
import InfiniteScroll from "react-infinite-scroll-component";

const VideoList = props => (
  // ToDo - mess around with the infinite scroll features
  <InfiniteScroll
    dataLength={props.videoData.length}
    next={props.handleScroll}
    hasMore={true}
    loader={<h4>Loading...</h4>}
  >
    {props.videoData.map((video, i) => (
      <VideoCard id={video.id.videoId} snippet={video.snippet} key={i} />
    ))}
  </InfiniteScroll>
);

export default VideoList;
