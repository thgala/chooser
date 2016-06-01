import { combineReducers } from 'redux';
import routes from './routes/reducer';

import Auth from 'Chooser/src/auth';
import Feed from 'Chooser/src/feed';


export default combineReducers({
  routes,
  auth: Auth.reducer,
  feed: Feed.reducer
});