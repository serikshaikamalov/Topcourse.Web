import { IChapter } from "interfaces/entities/chapter.interface";
import { BaseService } from "./_baseService";
import appAxios from "./axios";

class ChantersService extends BaseService<IChapter> {
  constructor() {
    super("/admin/chapters");
  }

  getAllByCourseId = (courseId: number) =>
    appAxios.get(`${this.basePath}/course/${courseId}`);
  reposition = (courseId: number, data: any[]) =>
    appAxios.post(`/admin/courses/${courseId}/reposition`, data);
}

export default new ChantersService();
