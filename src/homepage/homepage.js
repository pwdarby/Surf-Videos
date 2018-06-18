import React from "react";
import SearchBar from "../components/search_bar";
import InfiniteScroll from "react-infinite-scroll-component";
import VideoCard from "../components/video_card";

const VideoList = props => (
  <div>
    <SearchBar
      onSubmit={props.handleSearch}
      onChange={props.handleQueryChange}
    />
    <InfiniteScroll
      dataLength={props.videoData.length}
      next={props.handleScroll}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {props.videoData.map(video => (
        <VideoCard
          key={video.id.videoId}
          videoData={video.id.videoId}
          snippet={video.snippet}
        />
      ))}
    </InfiniteScroll>
  </div>
);

export default VideoList;
