import appAxios from "./axios";
const prefix = "/quiz";

class QuizService {
  static async getLessonQuizes(lessonId) {
    return appAxios.get(`/lessonquiz/lesson/${lessonId}`);
  }

  static async get(id) {
    return appAxios.get(`${prefix}/${id}`);
  }

  static async addQuizToLesson(data) {
    return appAxios.post(`/lessonquiz/add`, data);
  }

  static async getQuizQuestions(id) {
    return appAxios.get(`${prefix}/${id}/questions`);
  }

  static async getQuizWithQAByLessonId(lessonId) {
    return appAxios.get(`/lessonquiz/lesson/${lessonId}/quiz`);
  }

  static async submitQuiz(data) {
    return appAxios.post(`/submissions/`, data);
  }
}

export default QuizService;
