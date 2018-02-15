import React from 'react';
import Link from 'gatsby-link';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.root}>
    <ul className={styles.list}>
      <li className={styles.item}><Link to="/">Home</Link></li>
    </ul>
  </nav>
);

export default Navigation;
