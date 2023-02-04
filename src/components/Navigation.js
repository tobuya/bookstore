import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BsPersonFill } from 'react-icons/bs';
import styles from '../styles/Navigation.module.css';

const Navigation = () => (
  <nav>
    <div className={styles.container}>
      <h1 className={styles.h}>Bookstore CMS</h1>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <Link to="/" className={styles.link}>BOOKS</Link>
        </li>
        <li className={styles.list}>
          <Link to="categories" className={styles.link}>CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <BsPersonFill color="#0290ff" size={50} />
  </nav>
);

export default Navigation;
