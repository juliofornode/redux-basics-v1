import {LOAD_COMMENT} from '../actions/types';

export default (state=[], action) => {
  switch(action.type) {
  case LOAD_COMMENT:
    return [...state, action.payload];
  default:
    return state;
  }
};
