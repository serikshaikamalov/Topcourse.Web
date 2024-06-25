import appAxios from "./axios";

const prefix = "/homeworks";

class HomeworkService {
  static async getAll() {
    return appAxios.get(prefix);
  }
  static async get(homeworkId) {
    return appAxios.get(`${prefix}/${homeworkId}`);
  }
  static async getAllByLessonId(lessondId) {
    return appAxios.get(`${prefix}/lesson/` + lessondId);
  }
  static async post(data) {
    return appAxios.post(`${prefix}/add`, data);
  }
  static async put(id, data) {
    return appAxios.put(`${prefix}/` + id, data);
  }
  static async delete(id) {
    return appAxios.delete(`${prefix}/` + id);
  }
}

export default HomeworkService;
