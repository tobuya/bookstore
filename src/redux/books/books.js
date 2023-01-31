// Actions
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

// Initial State
const initialState = { books: [] };

// Action creators
export const addBookAction = (newBook) => ({ type: ADDED_BOOK, newBook });
export const removeBookAction = (id) => ({ type: REMOVED_BOOK, id });

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return {
        ...state,
        books: [...state, action.newBook],
      };
    case REMOVED_BOOK:
      return {
        ...state,
        books: [...state.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
