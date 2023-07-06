import React, { useState } from "react";

import styles from "../Home/home.module.scss";

import Input from "../Input/index";
import List from "../List/index";

const index = () => {
  const [posts, setPosts] = useState([]);
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div>
      <Input setPosts={setPosts} posts={posts} />
      {posts.map((post, index) => (
        <List
          removePost={removePost}
          number={index + 1}
          post={post}
          key={index}
        />
      ))}
    </div>
  );
};

export default index;
