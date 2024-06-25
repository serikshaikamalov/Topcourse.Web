import { BaseService } from "services/_baseService";
import appAxios from "services/axios";

class UsersAdminService extends BaseService<any> {
  constructor() {
    super("/admin/users");
  }
  ban = async (id: number, data: any) => {
    return appAxios.patch(`${this.basePath}/${id}/ban`, data);
  };
  updatePassword = async (id: number, data: any) => {
    return appAxios.post(`${this.basePath}/${id}/updatePassword`, data);
  };
  bulkUsers = async (data: any) => {
    return appAxios.post(`${this.basePath}/bulk-create`, data);
  };
}

export default new UsersAdminService();
