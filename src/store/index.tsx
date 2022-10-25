import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  //리듀서 넣기
});

const store = configureStore({
  reducer,
});

export default store;
