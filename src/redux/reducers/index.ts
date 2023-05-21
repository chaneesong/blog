import fetchRecentPostsSlice from '@/redux/features/fetchRecentPosts/fetchRecentPostsSlice';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
  recentPosts: fetchRecentPostsSlice,
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
