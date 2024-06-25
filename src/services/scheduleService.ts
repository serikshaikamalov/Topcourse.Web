import appAxios from "services/axios";

class ScheduleService {
  getUserScheduleByCourse = (courseId: number) => {
    return appAxios.get(`/schedules/courses/${courseId}/lessons`);
  };
}

export default new ScheduleService();
