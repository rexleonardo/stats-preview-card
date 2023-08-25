import React from "react";

import styles from "./NumberedContext.module.scss";

type TypeNumberedContext = {
  numberedText: string;
  text: string;
};

const NumberedContext = ({
  numberedText,
  text,
}: TypeNumberedContext): JSX.Element => {
  return (
    <div className={styles.numberedContextContainer}>
      <div className={styles.numberedText}>{numberedText}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default NumberedContext;
