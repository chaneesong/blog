import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import { fetchRecentPostsReducer } from '../features/fetchRecentPosts/fetchRecentPostsSlice';
import { fetchCategoriesReducer } from '../features/fetchCategory/fetchCategorySlice';

const combinedReducer = combineReducers({
  fetchRecentPosts: fetchRecentPostsReducer,
  fetchCategories: fetchCategoriesReducer,
});

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
