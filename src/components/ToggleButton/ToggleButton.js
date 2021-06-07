import React from 'react';

import styles from './ToggleButton.module.css';

const ToggleButton = ({
  label,
  color,
  children,
  isSelected,
  title,
  ...delegated
}) => {
  return (
    <button
      {...delegated}
      aria-pressed={isSelected}
      className={styles.toggleButton}
      style={{ backgroundColor: color }}
    >
      <span className="visually-hidden">{title}</span>
      {children}
    </button>
  );
};

export default ToggleButton;
