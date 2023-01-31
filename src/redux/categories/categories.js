// Action
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Initial State
const initialState = { categories: [] };

// Action creator
export const checkStatus = () => ({ type: CHECK_STATUS });

// Reducer
const categoriesReducer = (state = initialState, action) => {
  if (action.type === CHECK_STATUS) {
    return 'Under Construction';
  }
  return state;
};

export default categoriesReducer;
