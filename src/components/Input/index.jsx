import React, { useState } from "react";

import axios from "axios";

import styles from "../Input/input.module.scss";

const index = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNevPost = async () => {
    // e.preventDefault();
    const newPost = {
      // якщо локально
      // id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
    try {
      await axios.post(
        "https://64a6cb22096b3f0fcc809b30.mockapi.io/posts/",
        newPost
      );
    } catch (error) {
      console.log("Помилка при відправці", error);
    }
  };

  return (
    <div className={styles.root}>
      <form className={styles.myInput}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Заголовок"
        />
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Текст"
        />
        <div className={styles.myInputBtn}>
          <button onClick={addNevPost}>Створити нотатку</button>
        </div>
        {posts.length == 0 ? <h2>Створіть нотатку</h2> : <h2>Нотатки:</h2>}
      </form>
    </div>
  );
};

export default index;
