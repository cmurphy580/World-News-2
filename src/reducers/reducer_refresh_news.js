import { REFRESH_NEWS } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case REFRESH_NEWS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
