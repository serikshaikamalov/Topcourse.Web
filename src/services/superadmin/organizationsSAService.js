import { BaseService } from "services/_baseService";

class OrganizationsSAService extends BaseService {
  constructor() {
    super("/superadmin/organizations");
  }
}

export default new OrganizationsSAService();
