import React from "react";

import styles from "./lists.module.scss";

const index = ({ removePost, post, number }) => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.listWrapper}>
          <div className={styles.listText}>
            <h3>
              {number}. {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
          <div className={styles.listBtn}>
            <img
              src="https://img.icons8.com/?size=512&id=102350&format=png"
              alt="delete"
              onClick={() => removePost(post)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
