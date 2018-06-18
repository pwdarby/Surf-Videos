import React, {Component} from 'react';

const API_KEY = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';

// https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&videoId=f2LOAJ9I-UM&part=snippet&maxResults=50
// ToDo - does this need to be a stateful component? Probs not.
class VideoPage extends Component {
  componentDidMount = () => {
    this.getComments();
  };

  getComments = () => {
    let url = this.generateUrl();
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        const videoData = responseJson.items;
        console.log(videoData);
        // this.setState({
        //   videoData: this.state.videoData.concat(videoData),
        //   pageToken: responseJson.nextPageToken
        // });
      })
      .catch(error => {
        console.error(error);
      });
  };

  generateUrl = () => (
    `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&videoId=${this.props.match.params.id}&part=snippet&maxResults=50`
  );

  render() {
    const videoID = this.props.match.params.id;
    const link = "https://www.youtube.com/embed/"+videoID;
    return (
      <iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen />
      );
  }
}

export default VideoPage;