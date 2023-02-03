import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const [bookState, setBookState] = useState({
    id: '', title: '', author: '', category: '',
  });

  const onAddingNewBook = (e) => {
    setBookState(
      { ...bookState, item_id: v4(), [e.target.name]: [e.target.value].toString() },
    );
  };

  const dispatch = useDispatch();
  const onNewBookSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(bookState));
    setBookState({ title: '', author: '', category: '' });
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={onNewBookSubmit}>
        <input type="text" name="title" value={bookState.title} onChange={onAddingNewBook} placeholder="Book title" />
        <input type="text" name="author" value={bookState.author} onChange={onAddingNewBook} placeholder="Book author" />
        <input type="text" name="category" value={bookState.category} onChange={onAddingNewBook} placeholder="Book category" />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default BookForm;
