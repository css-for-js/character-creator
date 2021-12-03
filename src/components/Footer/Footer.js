import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      All character assets taken from{' '}
      <a
        href="https://www.openpeeps.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Open Peeps
      </a>
      , by Pablo Stanley
    </footer>
  );
};

export default Footer;
