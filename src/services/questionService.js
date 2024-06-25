import appAxios from "./axios";

const prefix = "/questions";

class QestionService {
  static async getAll() {
    return appAxios.get(prefix);
  }

  static async get(id) {
    return appAxios.get(`${prefix}/${id}`);
  }
  static async delete(id) {
    return appAxios.delete(`${prefix}/${id}`);
  }
  static async put(id, data) {
    return appAxios.put(`${prefix}/${id}`, data);
  }
  static async post(data) {
    return appAxios.post(`${prefix}/add`, data);
  }

  /**
   * data: {quizId, questionId}
   * @param {*} data
   * @returns
   */
  static async addQuestionToQuiz(data) {
    return appAxios.post(`/quiz-questions/add`, data);
  }
}

export default QestionService;
