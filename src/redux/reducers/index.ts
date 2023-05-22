import fetchRecentPostsSliceReducer from '@/redux/features/fetchRecentPosts/fetchRecentPostsSlice';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
  recentPosts: fetchRecentPostsSliceReducer,
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
