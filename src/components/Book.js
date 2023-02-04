import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/books';
import styles from '../styles/Book.module.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const onRemovingBook = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li className={styles.container}>
      <div className={styles.left}>
        <div className={styles.top_left}>
          <p className={styles.cat}>{category}</p>
          <h2>{title}</h2>
          <p className={styles.author}>{author}</p>
        </div>
        <div className={styles.bottom_left}>
          <button type="button">Comments</button>
          |
          <button type="button" onClick={onRemovingBook}>Remove</button>
          |
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.progress_bar}>
          <CircularProgressbar value={64} text={`${64}%`} className={styles.bar} />
          <div className={styles.percent}>
            <p className={styles.num}>64%</p>
            <p className={styles.com}>Completed</p>
          </div>
        </div>
        <hr />
        <div className={styles.chapter}>
          <p className={styles.chapt}>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
