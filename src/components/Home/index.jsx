import React, { useState, useEffect } from "react";

import axios from "axios";

import Input from "../Input/index";
import List from "../List/index";

const index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function onItems() {
      try {
        const { data } = await axios.get(
          "https://63cb9e105c6f2e1d84b8d12b.mockapi.io/favorites/"
        );
        setPosts(data);
      } catch (error) {
        alert("Помилка при отриманні");
      }
    }
    onItems();
  }, []);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
    try {
      axios.delete(
        `https://63cb9e105c6f2e1d84b8d12b.mockapi.io/favorites/${post.id}`
      );
    } catch (error) {
      console.log("Помилка при видалені", error);
    }
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
