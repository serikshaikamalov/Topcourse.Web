import { IChapter } from "interfaces/entities/chapter.interface";
import { BaseService } from "./_baseService";
import appAxios from "./axios";

class ChaptersStudentService extends BaseService<IChapter> {
  constructor() {
    super("/chapters");
  }

  /**
   * @returns course's chapters with lessons
   */
  getAllByCourseId = (courseId: number) =>
    appAxios.get(`${this.basePath}/course/${courseId}`);
}

export default new ChaptersStudentService();
