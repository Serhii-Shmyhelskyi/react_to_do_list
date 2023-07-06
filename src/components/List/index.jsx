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
            <button onClick={() => removePost(post)}>Видалити</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
