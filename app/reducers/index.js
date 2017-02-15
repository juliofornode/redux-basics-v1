import { combineReducers } from 'redux';
import CommentsReducer from './load_comment_reducer';

const rootReducer = combineReducers({
  comments: CommentsReducer
});

export default rootReducer;
