import React from "react";
import ReactDOM from "react-dom";
import HomepageContainer from "./homepage/homepage_container.js";
import Video from "./video_page/video";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/video_:id" component={Video} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
