import React from "react";
import { useQuery } from "react-query";
import { Link } from "@reach/router";

import fetcher from "./fetcher";
import "./styles.css";

export default function PostItem(props) {
  const { isLoading, error, data } = useQuery(["posts", props.postId], () =>
    fetcher(`/posts/${props.postId}`)
  );

  const post = data?.posts[props.postId];

  if (error) {
    return <h1>Error </h1>;
  }

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  return (
    <div className="App">
      <span>
        <Link to="/">Back to Posts</Link>
      </span>

      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <button>{post.likes} likes</button>
    </div>
  );
}
