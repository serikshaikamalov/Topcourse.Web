import appAxios from "./axios";

const prefix = "/answers";

class AnswerService {
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
  static async addAnswerToQuestion(data) {
    return appAxios.post(`/quiz-questions/add`, data);
  }

  static async getQuestionAnswers(questionId) {
    return appAxios.get(`/questions/${questionId}/answers`);
  }
}

export default AnswerService;
