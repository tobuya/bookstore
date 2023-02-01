import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;

  const dispatch = useDispatch();

  const onRemovingBook = () => {
    dispatch(removeBookAction(id));
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={onRemovingBook}>Delete</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
