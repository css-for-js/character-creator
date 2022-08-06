import React from 'react';

import styles from './ButtonRow.module.css';

const ButtonRow = ({ children }) => {
  return <div className={styles.buttonRow}>{children}</div>;
};

export default ButtonRow;
