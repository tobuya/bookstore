import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BooksList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
  ];

  return (
    <section>
      <div>
        <ul>
          {books.map((book) => (<Book title={book.title} author={book.author} key={book.id} />))}
        </ul>
      </div>
      <BookForm />
    </section>
  );
};

export default BooksList;
