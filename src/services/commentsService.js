import appAxios from "./axios";

export const commentsService = {
  delete: (id) => appAxios.delete(`/comments/${id}`),
  post: (data) => appAxios.post(`/comments/add`, data),
  postLessonComment: (lessonId, data) =>
    appAxios.post(`/comments/add/lesson/${lessonId}`, data),
  put: (id, data) => appAxios.put(`/comments/${id}`, data),

  /**
   *
   * Lesson's comments
   */
  getLessonComments: (lessonId) =>
    appAxios.get(`/comments/lesson/${lessonId}`),

  // Course's comments
  getCourseComments: (courseId) =>
    appAxios.get(`/comments/course/${courseId}`),

  /**
      Post's comments
   */
  getPostComments: (postId) => appAxios.get(`/comments/post/${postId}`),
  postPostComment: (postId, data) =>
    appAxios.post(`/comments/add/post/${postId}`, data),
};
