import { BaseService } from "services/_baseService";
import appAxios from "services/axios";

class CoursesAdminService extends BaseService<any> {
  constructor() {
    super("/admin/courses");
  }

  count = async () => {
    return appAxios.get(this.basePath + `/count`);
  };
}

export default new CoursesAdminService();
