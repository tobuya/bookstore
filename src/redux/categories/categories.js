// Actions
const STATUS_COMPLETED = 'STATUS_COMPLETED';
const STATUS_IN_PROGRESS = 'STATUS_IN_PROGRESS';

// Initial State
const initialState = { categories: [] };

// Action creator
export const completedStatusAction = () => ({ type: STATUS_COMPLETED });
export const inProgressStatusAction = () => ({ type: STATUS_IN_PROGRESS });

// Reducer
const categoriesReducer = (state = initialState, action) => {
  if (action.type === STATUS_COMPLETED || action.type === STATUS_IN_PROGRESS) {
    return {
      ...state,
      categories: [...state.categories, 'Under Construction'],
    };
  }
  return state;
};

export default categoriesReducer;
