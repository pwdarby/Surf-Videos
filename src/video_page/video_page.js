// Note this is a WIP and not included in the first pass
// ToDo - Implement comments and related videos
import React, { Component } from "react";

const API_KEY = "AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo";
const COMMENT_COUNT = 10;

class VideoPage extends Component {
  state = {
    videoId: "",
    commentData: []
  };

  componentDidMount = () => {
    this.setState({ videoId: this.props.match.params.id }, () => {
      this.getComments();
    });
  };

  getCommentUrl = () =>
    `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&videoId=${
      this.state.videoId
    }&part=snippet&maxResults=${COMMENT_COUNT}`;

  getComments = () => {
    let url = this.getCommentUrl();
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        const commentData = responseJson.items.map(comment => comment.snippet);
        this.setState({
          commentData
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.state.videoId}`}
          frameBorder="0"
          allowFullScreen
        />
        {this.state.commentData.map(
          (comment, i) =>
            comment.isPublic && (
              <div>
                {comment.topLevelComment.snippet.authorDisplayName}
                <div>{comment.topLevelComment.snippet.textDisplay}</div>
              </div>
            )
        )}
      </div>
    );
  }
}

export default VideoPage;
