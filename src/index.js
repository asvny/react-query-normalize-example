import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Home from "./Home";
import PostItem from "./PostItem";
import { worker } from "./mock";

worker.start();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" />
      <PostItem path="/posts/:postId" />
    </Router>
  </React.StrictMode>,
  rootElement
);
