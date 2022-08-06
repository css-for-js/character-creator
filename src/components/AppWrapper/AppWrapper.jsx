import React from 'react';
import styles from './AppWrapper.module.css';

function AppWrapper({ children }) {
  return <div className={styles.appWrapper}>{children}</div>;
}

export default AppWrapper;
