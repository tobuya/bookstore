import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookAction } from '../redux/books/books';

const BookForm = () => {
  const [bookState, setBookState] = useState({ id: '', title: '', author: '' });
  const booksData = useSelector((state) => state.books);
  const booksArray = booksData.books;
  const bookId = booksArray.length;

  const onAddingNewBook = (e) => {
    setBookState(
      { ...bookState, id: (bookId + 1).toString(), [e.target.name]: [e.target.value].toString() },
    );
  };

  const dispatch = useDispatch();
  const onNewBookSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookAction(bookState));
    setBookState({ id: '', title: '', author: '' });
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={onNewBookSubmit}>
        <input type="text" name="title" value={bookState.title} onChange={onAddingNewBook} placeholder="Book title" />
        <input type="text" name="author" value={bookState.author} onChange={onAddingNewBook} placeholder="Book author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default BookForm;
