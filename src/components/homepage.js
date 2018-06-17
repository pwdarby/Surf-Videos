import React, { Component } from "react";
import VideoCard from "./video_card";
import InfiniteScroll from "react-infinite-scroll-component";

const API_KEY = "AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo";
//       const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);

// ToDo - change to surf LOL (sloths are more fun for now)
const BASE_QUERY = "sloth";

class Homepage extends Component {
  state = {
    videoData: [],
    queryString: "",
    pageToken: ""
  };

  componentDidMount = () => {
    this.fetchVideos();
  };

  generateUrl = () => (
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${this
      .state.queryString + BASE_QUERY}&pageToken=${this.state.pageToken}`
  );

  fetchVideos = () => {
    let url = this.generateUrl();
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        const videoData = responseJson.items;
        this.setState({
          videoData: this.state.videoData.concat(videoData),
          pageToken: responseJson.nextPageToken
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  // ToDo - naming conventions. React Docs
  // ToDo - component is going to update every time we change the query string. Not ideal for performance.
  handleQueryChange = event => {
    event.preventDefault();
    this.setState({ queryString: event.target.value + " " });
  };

  // ToDo - naming conventions. React Docs
  handleSearch = event => {
    event.preventDefault();
    this.setState({videoData : [], pageToken: ''}, () => {
      this.fetchVideos();
    });
  };

  render() {
    return (
      // ToDo - .bind is deprecated so figure out how to do the next function with an arrow
      // ToDo - make search it's own component?
      <div>
        <form onSubmit={this.handleSearch.bind(this)}>
          <input
            type="text"
            name="search"
            onChange={this.handleQueryChange.bind(this)}
          />
          <input type="submit" value="Search" />
        </form>
        <InfiniteScroll
          dataLength={this.state.videoData.length}
          next={this.fetchVideos.bind(this)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.videoData.map((video, i) => (
            <VideoCard id={video.id.videoId} snippet={video.snippet} key={i} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Homepage;
