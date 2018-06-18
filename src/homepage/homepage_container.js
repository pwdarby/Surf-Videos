import React, { Component } from "react";
import Homepage from "./homepage";

const API_KEY = "AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo";
const BASE_QUERY = "surf";
const RESULT_COUNT = 10;

class HomepageContainer extends Component {
  state = {
    videoData: [],
    queryString: BASE_QUERY,
    pageToken: ""
  };

  componentDidMount = () => {
    this.getVideos();
  };

  getUrl = () =>
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${
      this.state.queryString
    }&pageToken=${this.state.pageToken}&maxResults=${RESULT_COUNT}`;

  getVideos = () => {
    let url = this.getUrl();
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

  handleQueryChange = e => {
    e.preventDefault();
    this.setState({ queryString: `${e.target.value} ${BASE_QUERY}` });
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({ videoData: [], pageToken: "" }, () => {
      this.getVideos();
    });
  };

  render() {
    return (
      <div>
        <Homepage
          handleSearch={this.handleSearch}
          handleQueryChange={this.handleQueryChange}
          handleScroll={this.getVideos}
          videoData={this.state.videoData}
        />
      </div>
    );
  }
}

export default HomepageContainer;
