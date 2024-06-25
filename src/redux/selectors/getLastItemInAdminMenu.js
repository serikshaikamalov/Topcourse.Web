import { createSelector } from "@reduxjs/toolkit";

export const getLastItemInAdminMenu = createSelector(
  (s) => s.adminMenu.data,
  (menu) => menu[menu.length - 1]
);
