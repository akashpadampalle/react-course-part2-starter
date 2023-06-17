import { useState } from "react";
import usePost from "./hooks/usePosts";

const PostList = () => {
  const [userId, setUerId] = useState<number>();
  const { data: posts, error } = usePost(userId);

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => setUerId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
