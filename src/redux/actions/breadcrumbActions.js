export const BreadcrumbActions = {
  SET_DATA: "[Breadcrumb] set data",
  REMOVE_BY_INDEX: "[Breadcrumb] remove item by index",
};

export const setBreadcrumbAction = (payload) => {
  return {
    type: BreadcrumbActions.SET_DATA,
    payload,
  };
};

export const removeBreadcrumbAction = (payload) => {
  return {
    type: BreadcrumbActions.REMOVE_BY_INDEX,
    payload,
  };
};
