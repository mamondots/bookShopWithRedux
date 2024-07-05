import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import EditBook from "../Pages/EditBook/EditBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/editeBook/:id",
        element: <EditBook></EditBook>,
      },
    ],
  },
]);
