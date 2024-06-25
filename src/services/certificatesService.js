import appAxios from "./axios";

export const certificatesService = {
  /**
   * Get lessons related with this course
   * @param {*} courseId
   * @returns
   */
  getAll: () => appAxios.get(`/admin/certificates`),
  get: (id) => appAxios.get(`/admin/certificates/${id}`),
  // Only visible for student
  getStudentCertificates: () => appAxios.get(`/certificates/student`),
  // Public
  getCertificate: (id) => appAxios.get(`/certificates/${id}`),
  delete: (id) => appAxios.delete(`/admin/certificates/${id}`),
  put: (id, data) => appAxios.put(`/admin/certificates/${id}`, data),
  post: (data) => appAxios.post(`/admin/certificates/add`, data),
};
