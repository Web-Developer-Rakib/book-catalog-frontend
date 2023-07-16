import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import { userLogin } from "./redux/Slices/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const user = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      dispatch(userLogin(user));
    }
  }, []);
  return (
    <>
      <MainLayout />
      <ToastContainer />
    </>
  );
}

export default App;
