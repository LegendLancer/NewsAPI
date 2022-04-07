import { createSlice } from '@reduxjs/toolkit';

export const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    data: [],
    keyword: '',
  },
  reducers: {
    fetchArticles: (state, action) => {
      state.data = action.payload;
    },
    setKeyword: (state, action) => {
      console.log('slice set key', action.payload);
      state.keyword = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchArticles, setKeyword } = articleSlice.actions;

export default articleSlice.reducer;
