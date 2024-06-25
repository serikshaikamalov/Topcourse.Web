import { TableColumns } from "../helpers/tableColumns";

export const listConfig = [TableColumns.id, TableColumns.name, TableColumns.systemName];

export const addConfig = [TableColumns.name, TableColumns.systemName];
export const editConfig = [...addConfig];
