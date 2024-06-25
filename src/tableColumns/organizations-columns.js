import { TableColumns } from "../helpers/tableColumns";

export const listConfig = [
  TableColumns.id,
  TableColumns.name,
  TableColumns.email,
  TableColumns.domain,
  {
    key: "landing",
    label: "Landing",
  },

  TableColumns.isActive,
];

export const addConfig = [
  TableColumns.name,
  TableColumns.domain,
  TableColumns.email,
  TableColumns.phone,
  {
    key: "landing",
    label: "Landing",
  },
  TableColumns.isActive,
];
export const editConfig = [...addConfig];
