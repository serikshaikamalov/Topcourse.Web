import appAxios from "../axios";

export const rolesSAService = {
  getAll: () => appAxios.get(`/superadmin/roles`),
  get: (id) => appAxios.get(`/superadmin/roles/${id}`),
  delete: (id) => appAxios.delete(`/superadmin/roles/${id}`),
  post: (data) => appAxios.post(`/superadmin/roles/add`, data),
  put: (id, data) => appAxios.put(`/superadmin/roles/${id}`, data),
};
