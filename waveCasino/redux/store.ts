
import { configureStore } from '@reduxjs/toolkit';
import myReducer from './reducers/myReducer';

const store = configureStore({
  reducer: {
    myReducer,
  },
});

export default store;

// Provide type definitions for RootState
export type RootState = ReturnType<typeof store.getState>;