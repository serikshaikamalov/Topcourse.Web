import appAxios from "./axios";

class SubscriptionService {
  /**
   * Get lessons related with this course
   * @param {*} courseId
   * @returns
   */
  static async getAll() {
    return appAxios.get(`/subscriptions`);
  }

  static async get(id) {
    return appAxios.get(`/subscriptions/${id}`);
  }

  static async delete(id) {
    return appAxios.delete(`/subscriptions/${id}`);
  }
  static async put(id, data) {
    return appAxios.put(`/subscriptions/${id}`, data);
  }
  static async post(data) {
    return appAxios.post(`/subscriptions/add`, data);
  }
}

export default SubscriptionService;
