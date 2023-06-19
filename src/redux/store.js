import { configureStore } from '@reduxjs/toolkit';
import redditReducer from './reducers';

const store = configureStore({
  reducer: redditReducer
});

export default store;