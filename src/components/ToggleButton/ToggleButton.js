import React from 'react';

import styles from './ToggleButton.module.css';

const ToggleButton = ({
  label,
  color,
  children,
  isSelected,
  ...delegated
}) => {
  return (
    <button
      {...delegated}
      aria-pressed={isSelected}
      className={styles.toggleButton}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
