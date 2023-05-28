import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import { fetchRecentPostsReducer } from '../features/fetchRecentPosts/fetchRecentPostsSlice';
import { fetchCategoriesReducer } from '../features/fetchCategory/fetchCategorySlice';
import { fetchTagsReducer } from '../features/fetchTag/fetchTagSlice';

const combinedReducer = combineReducers({
  postcards: fetchRecentPostsReducer,
  categories: fetchCategoriesReducer,
  tags: fetchTagsReducer,
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
