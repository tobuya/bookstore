import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCHED_BOOK = 'bookstore/books/FETCHED_BOOK';
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'coi5KbwSmZBfENXVGL0y';
const appResourceUrl = `${baseUrl}/${appId}/books`;

const initialState = [];

const fetchBooks = createAsyncThunk(
  FETCHED_BOOK,
  async (post, { dispatch }) => {
    const response = await fetch(appResourceUrl);
    const jsonData = await response.json();
    const books = Object.keys(jsonData).map((id) => ({
      ...jsonData[id][0],
      item_id: id,
    }));
    dispatch({
      type: FETCHED_BOOK,
      payload: books,
    });
  },
);

const addBook = createAsyncThunk(
  ADDED_BOOK,
  async (book, { dispatch }) => {
    await fetch(appResourceUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({ type: ADDED_BOOK, payload: book });
  },
);

const deleteBook = createAsyncThunk(
  REMOVED_BOOK,
  async (id, { dispatch }) => {
    await fetch(`${appResourceUrl}/${id}`, { method: 'DELETE' });
    dispatch({ type: REMOVED_BOOK, payload: id });
  },
);

const booksReducer = (state = initialState, action) => {
  if (action.type === FETCHED_BOOK) {
    return action.payload;
  } if (action.type === ADDED_BOOK) {
    return [...state, action.payload];
  } if (action.type === REMOVED_BOOK) {
    return state.filter((book) => book.item_id !== action.payload);
  }
  return state;
};

export { fetchBooks, addBook, deleteBook };
export default booksReducer;
