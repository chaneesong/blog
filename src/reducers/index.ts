import fetchRecentPostsSlice from '@/features/fetchRecentPosts/fetchRecentPostsSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  recentPosts: fetchRecentPostsSlice,
});

export default rootReducer;
