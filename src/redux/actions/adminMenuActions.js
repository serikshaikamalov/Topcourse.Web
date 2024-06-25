export const AdminMenuActions = {
  SET_DATA: "[AdminMenu] set data",
  REMOVE_LAST: "[AdminMenu] remove last menu item",
};

export const setAdminMenuAction = (payload) => {
  return {
    type: AdminMenuActions.SET_DATA,
    payload,
  };
};

export const removeLastItemInAdminMenuAction = () => {
  return {
    type: AdminMenuActions.REMOVE_LAST,
  };
};
