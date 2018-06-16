import React, {Component} from 'react';
import VideoCard from './video_card';
import InfiniteScroll from 'react-infinite-scroll-component';

const API_KEY = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';
const QUERY = 'sloths';

// var URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${QUERY}&pageToken=${}`;




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
    console.log(this);
    console.log('here');
    var URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${this.state.query}&pageToken=${this.state.pageToken}`;
    fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        // const videos = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        const videoData = responseJson.items.map(obj => obj.snippet);
        this.setState({videoData, pageToken: responseJson.nextPageToken});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // clicked(){
  //   fetch(finalURL)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log(responseJson);
  //       const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
  //       this.setState({resultyt});
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }



  render(){
    // console.log(finalURL);
    // console.log(this.state.videos);
    return (
    // ToDo - make the cards their own component
    // ToDo - wrap entire card with an href to link to the actual video page
      <InfiniteScroll
        dataLength={this.state.videoData.length}
        next={this.fetchVideos}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
      {this.state.videoData.map((video, i) => (
      <VideoCard thumbnail={video.thumbnails.default} index={i} title={video.title} description={video.description} />
  ))}
      </InfiniteScroll>
  );
  }
}

export default Homepage;