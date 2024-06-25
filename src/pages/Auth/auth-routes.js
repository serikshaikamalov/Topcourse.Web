import { Outlet } from "react-router-dom";
import Login from "./Login/Login";
import { Register } from "./Register/Register";
import Logout from "./Logout";

export const authRoutes = [
  {
    path: "auth",
    element: Outlet,
    children: [
      {
        path: "",
        redirect: "login",
      },
      {
        path: "login",
        element: Login,
      },
      {
        path: "register",
        element: Register,
      },
      {
        path: "logout",
        element: Logout,
      },
    ],
  },
];
