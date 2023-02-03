import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  const onRemovingBook = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{category}</p>
      <button type="button" onClick={onRemovingBook}>Delete</button>
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
