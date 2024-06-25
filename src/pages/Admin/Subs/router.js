import AdminSubsListPage from "./Pages/List/List";
import AdminSubscriptionEditPage from "./Pages/Edit/Edit";
import AdminSubscriptionAddPage from "./Pages/Add/Add";
import { Outlet } from "react-router-dom";

export const adminSubscriptionRoutes = [
  {
    path: "subscriptions",
    element: Outlet,
    children: [
      {
        path: "",
        element: AdminSubsListPage,
      },
      {
        path: "edit/:id",
        element: AdminSubscriptionEditPage,
      },
      {
        path: "add",
        element: AdminSubscriptionAddPage,
      },
    ],
  },
];
