import React from "react";
import styles from "../style/Message.module.css";

function Message() {
  return (
    <p className={styles.message}>
      <span role="img">👋</span>
    </p>
  );
}

export default Message;
