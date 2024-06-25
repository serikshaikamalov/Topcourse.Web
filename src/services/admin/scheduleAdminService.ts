import { BaseService } from "services/_baseService";
import appAxios from "services/axios";

class ScheduleAdminService extends BaseService<any> {
  constructor() {
    super("/admin/schedules");
  }

  getScheduleLessons = (id: number) => {
    return appAxios.get(`${this.basePath}/${id}/lessons`);
  };

  addLessonsToSchedule = async(id: number, data: any[]) => {
    return appAxios.post(`${this.basePath}/${id}/lessons/add`, data);
  };
}

export default new ScheduleAdminService();
