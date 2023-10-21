import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./Route/MyRouter.jsx";
import UserContext from "./AuthContext/UserContext";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserContext>
        <RouterProvider router={MyRouter}></RouterProvider>
      </UserContext>
    </ThemeProvider>
  </React.StrictMode>
);
