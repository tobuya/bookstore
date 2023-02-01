import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const BooksList = () => {
  const booksData = useSelector((state) => state.books);

  return (
    <section>
      <div>
        <ul>
          {booksData.books.map((book) => (
            <Book title={book.title} id={book.id} author={book.author} key={book.id} />
          ))}
        </ul>
      </div>
      <BookForm />
    </section>
  );
};

export default BooksList;
