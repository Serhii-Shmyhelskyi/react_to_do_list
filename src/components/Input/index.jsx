import React, { useState, useEffect } from "react";

import axios from "axios";

import styles from "../Input/input.module.scss";

const index = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  let buttoAnimation = title.length + body.length;

  const addNevPost = (e) => {
    e.preventDefault();
    const newPost = {
      // якщо локально
      // id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    // оновлення сайту чере 0,5 с, після добавлянная поста
    setTimeout(function () {
      location.reload();
    }, 500);
    // очистка  useState
    setTitle("");
    setBody("");

    try {
      axios.post("https://64a6cb22096b3f0fcc809b30.mockapi.io/posts/", newPost);
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
        {buttoAnimation ? (
          <div className={styles.myInputBtn}>
            <img
              className={styles.myInputBtnNoDisable}
              src="https://img.icons8.com/?size=512&id=110229&format=png"
              alt="plus"
              onClick={addNevPost}
            />
          </div>
        ) : (
          <div className={styles.myInputBtn}>
            <img
              className={styles.myInputBtnDisable}
              src="https://img.icons8.com/?size=512&id=110229&format=png"
              alt="plus"
            />
          </div>
        )}

        {posts.length == 0 ? <h2>Створіть нотатку</h2> : <h2>Нотатки:</h2>}
      </form>
    </div>
  );
};

export default index;
