const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

const initialState = {
  books: [{
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: '3',
    title: 'The River and The Source',
    author: 'Thomas Cook',
  }],
};

export const addBookAction = (newBook) => ({ type: ADDED_BOOK, newBook });
export const removeBookAction = (id) => ({ type: REMOVED_BOOK, id });

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return {
        ...state,
        books: [...state.books, action.newBook],
      };
    case REMOVED_BOOK:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
