import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  email: string;
}
const storedEmail = localStorage.getItem("userEmail");
const initialState: IUser = {
  email: storedEmail ? storedEmail : "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    userLogin: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("userEmail", action.payload);
    },
    userLogout: (state) => {
      state.email = "";
      localStorage.removeItem("userEmail");
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
