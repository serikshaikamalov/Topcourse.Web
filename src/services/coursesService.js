import appAxios from "./axios";

export class CoursesService {
  static async getAll() {
    return appAxios.get(`/admin/courses/`);
  }
  static async get(id) {
    return appAxios.get(`/courses/${id}`);
  }
  static async me() {
    return appAxios.get(`/courses/me`);
  }
}

export default CoursesService;
