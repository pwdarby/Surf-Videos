import React, {Component} from 'react';
import VideoCard from './video_card';
import InfiniteScroll from 'react-infinite-scroll-component';

const API_KEY = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';
//       const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);

class Homepage extends Component {

  state = {
    videoData: [],
    query: 'sloths',
    pageToken: ''
  };

  componentDidMount = () => {
    this.fetchVideos();
  };

  fetchVideos() {
    let URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${this.state.query}&pageToken=${this.state.pageToken}`;
    fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        const videoData = responseJson.items;
        this.setState({videoData: this.state.videoData.concat(videoData), pageToken: responseJson.nextPageToken});
      })
      .catch((error) => {
        console.error(error);
      });
  };


  render(){
    console.log(this.props);
    // console.log(finalURL);
    // console.log(this.state.videos);
    return (
      // ToDo - .bind is deprecated so figure out how to do the next function with an arrow
      <InfiniteScroll
        dataLength={this.state.videoData.length}
        next={this.fetchVideos.bind(this)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
      {this.state.videoData.map((video, i) => (
        <VideoCard id={video.id.videoId} snippet={video.snippet} index={i} />
      // <VideoCard id={video.id} thumbnail={video.snippet.thumbnails.default} index={i} title={video.snippet.title} description={video.snippet.description} />
  ))}
      </InfiniteScroll>
  );
  }
}

export default Homepage;