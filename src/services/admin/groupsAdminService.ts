import { BaseService } from "services/_baseService";
import appAxios from "services/axios";

class GroupsAdminService extends BaseService<any> {
  constructor() {
    super("/admin/groups");
  }

  findAllByCourseId = async (courseId: number) => {
    return appAxios.get(this.basePath + `/courses/${courseId}`);
  };
}

export default new GroupsAdminService();
