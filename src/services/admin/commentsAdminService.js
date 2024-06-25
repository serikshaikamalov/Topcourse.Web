import appAxios from "services/axios";

export const commentsAdminService = {
  getAll: () => appAxios.get(`/admin/comments`),
  get: (id) => appAxios.get(`/admin/comments/${id}`),
  delete: (id) => appAxios.delete(`/admin/comments/${id}`),
  post: (data) => appAxios.post(`/admin/comments/add`, data),
  put: (id, data) => appAxios.put(`/admin/comments/${id}`, data),
  getAllByCourse: (courseId) =>
    appAxios.get(`/admin/comments/course/${courseId}`),
  findAllByCourses: () => appAxios.get(`/admin/comments/courses/list`),
  count: () => appAxios.get(`/admin/comments/courses/count`),
};
