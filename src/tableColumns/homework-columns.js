import { TableColumns } from "../helpers/tableColumns";

export const listConfig = [
  TableColumns.id,
  TableColumns.title,
  TableColumns.isActive,
  TableColumns.createdDate,
];

export const addConfig = [TableColumns.title, TableColumns.richText];
export const editConfig = [
  TableColumns.title,
  TableColumns.richText,
  TableColumns.isActive,
];
