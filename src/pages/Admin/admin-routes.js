import { adminSubscriptionRoutes } from "./Subs/router";
import { adminUsersRoutes } from "./Users/users-routes";
import { adminCoursesRoutes } from "./Courses/coures-routes";
import AdminLayout from "./AdminLayout";
import adminSubmissionsRoutes from "./Submissions/quiz-router";
import { adminGroupsRoutes } from "./Groups/group-routes";
import { adminCommentsRoutes } from "./Comments/comments-routes";
import { adminCertificationRoutes } from "./Certificates/router";
import { adminFlowsRoutes } from "./Flows/flows-routes";
import { adminScheduleRoutes } from "./Schedule/schedule-routes";
import { adminStatsRoutes } from "./Stats/stats-router";

export const adminRoutes = [
  {
    path: "admin",
    element: AdminLayout,
    name: "Admin Panel",
    children: [
      ...adminCoursesRoutes,
      ...adminSubscriptionRoutes,
      ...adminUsersRoutes,
      ...adminSubmissionsRoutes,
      ...adminGroupsRoutes,
      ...adminCommentsRoutes,
      ...adminCertificationRoutes,
      ...adminFlowsRoutes,
      ...adminScheduleRoutes,
      ...adminStatsRoutes,
    ],
  },
];
