import { TableColumns } from "../helpers/tableColumns";

export const listConfig = [
  TableColumns.id,
  TableColumns.name,
  TableColumns.status,
  TableColumns.author,
  TableColumns.roles("author.roles"),
];

export const addConfig = [
  TableColumns.name,
  TableColumns.mainImage,
  TableColumns.richText,
  TableColumns.status,
];
export const editConfig = [...addConfig];
