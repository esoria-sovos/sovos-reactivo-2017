import { combineReducers } from 'redux';

import posts from './posts/postsReducer';

const rootReducer = combineReducers({
  posts,
  app
});

export default rootReducer;
