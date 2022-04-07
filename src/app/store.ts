import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articles/articleSlice';
import { articleData } from '../interfaces/articleInterface';

export interface stateType {
  articles: articleData;
}

export default configureStore({
  reducer: {
    articles: articleReducer,
  },
});
