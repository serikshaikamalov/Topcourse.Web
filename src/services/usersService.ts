import { BaseService } from "services/_baseService";
import appAxios from "services/axios";

class UsersService extends BaseService<any> {
  constructor() {
    super("/users");
  }

  me = async () => {
    const { data } = await appAxios.get(this.basePath + "/me");
    return data;
  };
}

export default new UsersService();
