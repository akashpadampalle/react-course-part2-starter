import { useState } from "react";
import usePost from "./hooks/usePosts";
import React from "react";

const PostList = () => {
  const pageSize = 10;
  const { data, error, fetchNextPage, isFetching } = usePost({ pageSize });

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary mt-3 ms-3"
        disabled={isFetching}
        onClick={() => fetchNextPage()}
      >
        {isFetching ? "Loading..." : "Load more"}
      </button>
    </>
  );
};

export default PostList;
