import { createSlice } from "@reduxjs/toolkit";

interface ISearch {
  search: string;
  filter: string;
}
const initialState: ISearch = {
  search: "",
  filter: "name",
};
const searchSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setSearch, setFilter } = searchSlice.actions;

export default searchSlice.reducer;
