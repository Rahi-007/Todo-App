import { ApiProvider } from "@reduxjs/toolkit/query/react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../app/Home.jsx";
import "../style/global.css";
import { api } from "./redux.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <p>Contact Us</p> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider api={api}>
    <RouterProvider router={router} />
  </ApiProvider>
);
