const { default: appAxios } = require("./axios");

class SubmissionsService {
  static getAll() {
    return appAxios.get(`/submissions/`);
  }

  static getSubmissionById(submissionId) {
    return appAxios.get(`/submissions/${submissionId}`);
  }

  /**
   * Submissions
   * @param {*} lessonId
   * @returns
   */
  static getUserSubmissionsByQuiz(lessonId) {
    return appAxios.get(`/submissions/lesson/${lessonId}`);
  }

  static getSubmissionResult(submissionId) {
    return appAxios.get(`/submission-results/${submissionId}`);
  }
}

export default SubmissionsService;
