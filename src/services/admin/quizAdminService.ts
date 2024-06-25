import { BaseService } from "services/_baseService";

class QuizAdminService extends BaseService<any> {
  constructor() {
    super("/admin/quiz");
  }
}

export default new QuizAdminService();
