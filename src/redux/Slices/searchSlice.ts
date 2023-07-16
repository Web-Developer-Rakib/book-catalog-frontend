import { createSlice } from "@reduxjs/toolkit";

interface ISearch {
  searchText: string;
  searchFilter: string;
}
const initialState: ISearch = {
  searchText: "",
  searchFilter: "title",
};
const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
});

export const { setSearchFilter, setSearchText } = searchSlice.actions;

export default searchSlice.reducer;
