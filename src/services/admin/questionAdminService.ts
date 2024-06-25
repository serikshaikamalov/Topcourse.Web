import { BaseService } from "services/_baseService";

class QuestionAdminService extends BaseService<any> {
  constructor() {
    super("/admin/questions");
  }
}

export default new QuestionAdminService();
