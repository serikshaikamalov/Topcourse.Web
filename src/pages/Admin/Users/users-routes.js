import { Outlet } from "react-router-dom";
import AddPage from "./pages/Add/Add";
import EditPage from "./pages/Edit/Edit";
import ListPage from "./pages/List/List";
import View from "./pages/View/View";
import UpdatePasswordPage from "./pages/UpdatePassword/UpdatePassword";
import AddBulk from "./pages/AddBulk/AddBulk";

export const adminUsersRoutes = [
  {
    path: "users",
    element: Outlet,
    children: [
      {
        path: "",
        element: ListPage,
      },
      {
        path: "add",
        element: AddPage,
      },
      {
        path: "add-bulk",
        element: AddBulk,
      },
      {
        path: "edit/:id",
        element: EditPage,
      },
      {
        path: "view/:id",
        element: View,
      },
      {
        path: ":id/updatePassword",
        element: UpdatePasswordPage,
      },
    ],
  },
];
