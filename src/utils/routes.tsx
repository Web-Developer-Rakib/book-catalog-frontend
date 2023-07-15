import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBook from "../views/AddBook/AddBook";
import AllBooks from "../views/AllBooks/AllBooks";
import BookDetails from "../views/BookDetails/BookDetails";
import EditBook from "../views/EditBook/EditBook";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AllBooks />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
      {
        path: "edit-book/:bookId",
        element: <EditBook />,
      },
      {
        path: "book-details/:bookId",
        element: <BookDetails />,
      },
    ],
  },
]);
export default router;
