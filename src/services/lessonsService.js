import appAxios from "./axios";

class LessonsService {
  static async getAllByChapter(chapterId, queryParams) {
    return appAxios.get(`/lessons/chapter/${chapterId}`, {
      params: queryParams,
    });
  }

  static async get(id) {
    return appAxios.get(`/lessons/${id}`);
  }
  static async reposition(chapterId, data) {
    return appAxios.post(`/admin/chapters/${chapterId}/reposition`, data);
  }
}

export default LessonsService;
