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
      <span class="visually-hidden">hello</span>
      {children}
    </button>
  );
};

export default ToggleButton;
