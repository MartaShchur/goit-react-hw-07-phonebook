import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { inputValue: '' };

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setContactsFilter: {
      reducer: (state, action) => {
      state.inputValue = action.payload;
      },
      
    prepare: inputValue => {
      return {
        payload: inputValue,
      };
    },
  },
  },
});

export const { setContactsFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;