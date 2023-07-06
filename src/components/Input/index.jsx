import React, { useState } from "react";

import styles from "../Input/input.module.scss";

const index = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNevPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    console.log(newPost);
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
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
