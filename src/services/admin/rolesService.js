import appAxios from "../axios";

export const rolesAdminService = {
  getAll: () => appAxios.get(`/admin/roles`),
};
