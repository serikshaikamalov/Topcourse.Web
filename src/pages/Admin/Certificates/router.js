import AdminSubsListPage from "./Pages/List/List";
import AdminSubscriptionEditPage from "./Pages/Edit/Edit";
import AdminSubscriptionAddPage from "./Pages/Add/Add";
import { Outlet } from "react-router-dom";

export const adminCertificationRoutes = [
  {
    path: "certificates",
    element: Outlet,
    children: [
      {
        path: "",
        element: AdminSubsListPage,
      },
      {
        path: "add",
        element: AdminSubscriptionAddPage,
      },
      {
        path: "edit/:id",
        element: AdminSubscriptionEditPage,
      },
    ],
  },
];
