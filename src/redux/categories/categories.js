const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = { categories: [] };

export const checkStatus = () => ({ type: CHECK_STATUS });

const categoriesReducer = (state = initialState, action) => {
  if (action.type === CHECK_STATUS) {
    return {
      categories: [...state.categories, 'Under Construction'],
    };
  }
  return state;
};

export default categoriesReducer;
