import appAxios from "../axios";

export const statsAdminService = {
  getUsersCount: () => appAxios.get(`/admin/users/count`),
  getCoursesState: () => appAxios.get(`/admin/lesson-history/courses`),
  getCourseState: (courseId) =>
    appAxios.get(`/admin/lesson-history/courses/${courseId}/count`),

  getMostPopularLessons: (courseId) =>
    appAxios.get(`/admin/lesson-history/courses/${courseId}/popular-lessons`),
};
