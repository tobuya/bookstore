import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BsPersonFill } from 'react-icons/bs';
import styles from '../styles/Navigation.module.css';

const Navigation = () => (
  <nav>
    <div className={styles.container}>
      <h1 className={styles.h}>Bookstore CMS</h1>
      <ul className={styles.ul}>
        <li className={styles.list}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>BOOKS</NavLink>
        </li>
        <li className={styles.list}>
          <NavLink to="categories" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
    <BsPersonFill color="#0290ff" size={50} />
  </nav>
);

export default Navigation;
