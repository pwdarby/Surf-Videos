import React, {Component} from 'react';

// ToDo - does this need to be a stateful component? Probs not.
class VideoPage extends Component {
  componentDidMount = () => {

  }
  render() {
    console.log(this.props.match.params.id);
    const videoID = this.props.match.params.id;
    const link = "https://www.youtube.com/embed/"+videoID;
    return (
      <iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen />
      );
  }
}

export default VideoPage;