import appAxios from "./axios";

export const commentsSAService = {
  getAll: () => appAxios.get(`/superadmin/comments`),
};
