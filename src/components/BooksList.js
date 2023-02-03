import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/books';

const BooksList = () => {
  const dispatch = useDispatch();

  const booksData = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <section>
      <div>
        <ul>
          {booksData.map((book) => (
            <Book
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              key={book.item_id}
            />
          ))}
        </ul>
      </div>
      <BookForm />
    </section>
  );
};

export default BooksList;
