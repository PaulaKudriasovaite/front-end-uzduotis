import { createStore, combineReducers } from 'redux';
import gifsReducer from './gifsReducer';

const rootReducer = combineReducers({ // Combine all useable reducers
  gifs: gifsReducer,
})

const store = createStore(rootReducer); // Init redux store

export default store;