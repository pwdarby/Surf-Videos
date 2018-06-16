import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/homepage.js";
import VideoPage from "./components/video_page";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/video_:id" component={VideoPage} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
