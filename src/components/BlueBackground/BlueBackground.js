import React from 'react';

import styles from './BlueBackground.module.css';

const BlueBackground = ({ children }) => {
    return <div className={styles.blueBackground}>{children}</div>;
  };

export default BlueBackground;
