import { BaseService } from "services/_baseService";

class UsersSAService extends BaseService {
  constructor() {
    super("/superadmin/users");
  }
}

export default new UsersSAService();
