import { createSelector } from "@reduxjs/toolkit";

// Чтобы получить список присвоенных ролей по авторизованному пользователю
export const getAuthUserRoles = createSelector(
  (store) => store.auth.user,
  (user) => {
    if (user) return user?.roles;
    return null;
  }
);

// Супер админ
export const isSuperAdminSelector = createSelector(
  (store) => store.auth.user,
  (user) => {
    if (user?.roles)
      return user.roles.map((r) => r.systemName).includes("superadmin");
    return false;
  }
);

// Автор курса
export const isCourseAuthorSelector = createSelector(
  (store) => store.auth.user,
  (user) => {
    if (user?.roles)
      return user.roles.map((r) => r.systemName).includes("author");
    return false;
  }
);
