import { createSelector } from "@reduxjs/toolkit";

export const getAdminMenu = createSelector(
  (s) => s.adminMenu.data,
  (menu) => menu
);
