import { BaseService } from "services/_baseService";
import appAxios from "services/axios";

class LessonsAdminService extends BaseService<any> {
  constructor() {
    super("/admin/lessons");
  }

  getAllByChapter = (chapterId: number, queryParams: any) => {
    console.log("basePath:", this);

    return appAxios.get(`${this.basePath}/chapter/${chapterId}`, {
      params: queryParams,
    });
  };

  /**
   * @override 
   */
  post = (data: number): Promise<any> =>
    appAxios.post(`${this.basePath}/add`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
}

const lessonsAdminService = new LessonsAdminService();
export default lessonsAdminService;
