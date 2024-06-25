import { BaseService } from "services/_baseService";

class AnswerAdminService extends BaseService<any> {
  constructor() {
    super("/admin/answers");
  }
}

export default new AnswerAdminService();
