import React, { Component } from "react";
import VideoList from './video_list';
import SearchBar from '../components/search_bar';

// ToDo - commenting
// ToDo - remove app.css file and any other unused files

const API_KEY = "AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo";

// ToDo - change to surf LOL (sloths are more fun for now)
const BASE_QUERY = "sloth";

class HomepageContainer extends Component {
  state = {
    videoData: [],
    queryString: BASE_QUERY,
    pageToken: ""
  };

  componentDidMount = () => {
    this.getVideos();
  };

  generateUrl = () =>
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${
      this.state.queryString
    }&pageToken=${this.state.pageToken}`;

  getVideos = () => {
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
  // ToDo - double quotes for JSX single for JS
  handleQueryChange = e => {
    e.preventDefault();
    this.setState({ queryString: `${e.target.value} ${BASE_QUERY}` });
  };

  // ToDo - naming conventions. React Docs
  handleSearch = e => {
    e.preventDefault();
    this.setState({ videoData: [], pageToken: ""}, () => {
      this.getVideos();
    });
  };

  render() {
    return (

      // ToDo - make search it's own component?
      // ToDo - play around with InfiniteScroll component
      <div>
      <SearchBar handleClick={this.handleSearch} handleChange={this.handleQueryChange}/>
      <VideoList handleScroll={this.getVideos} videoData={this.state.videoData} />

    </div>
    );
  }
}

export default HomepageContainer;
