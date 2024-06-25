import RatingsPage from "pages/Ratings/pages/Ratings/Ratings";
import StudentCertificateListPage from "./pages/Certificates/StudentCertificates";
import ProfileProgress from "./pages/Progress/ProfileProgress";
import ProfileLayout from "./ProfileLayout";
import ProfilePage from "./pages/Profile/Profile";

export const profileRoutes = [
  {
    path: "profile",
    element: ProfileLayout,
    children: [
      {
        path: "main",
        element: ProfileProgress,
      },
      {
        path: "me",
        element: ProfilePage,
      },
      {
        path: "ratings",
        element: RatingsPage,
      },
      {
        path: "certificates",
        element: StudentCertificateListPage,
      },
    ],
  },
];
