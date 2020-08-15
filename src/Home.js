import React from "react";
import { useQuery } from "react-query";
import { Link } from "@reach/router";

import fetcher from "./fetcher";

import "./styles.css";

export default function Home() {
  const { isLoading, error, data } = useQuery("posts", () => fetcher("/posts"));

  if (error) {
    return <h1>Error </h1>;
  }

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  const array = Object.values(data.posts);

  return (
    <div className="App">
      <h1>Posts</h1>
      {array.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <h2>
              <Link to={`posts/${data.id}`}>{data.title}</Link>
            </h2>
            <p>{data.content} </p>
            <p>
              Likes <strong>{data.likes}</strong>
            </p>
          </React.Fragment>
        );
      })}
    </div>
  );
}
