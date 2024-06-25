import AdminSubmissionListPage from "./pages/List/List";
import AdminSubmissionDetailPage from "./pages/Detail/Detail";
import { Outlet } from "react-router-dom";

const adminSubmissionsRoutes = [
  {
    path: "submissions",
    element: Outlet,
    children: [
      {
        path: "",
        element: AdminSubmissionListPage,
      },
      {
        path: ":submissionId",
        element: AdminSubmissionDetailPage,
      },
    ],
  },
];

export default adminSubmissionsRoutes;
