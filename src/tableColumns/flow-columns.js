import inputTypeEnum from "enums/inputTypes";
import { TableColumns } from "../helpers/tableColumns";

export const listConfig = [
  TableColumns.index,
  TableColumns.name,
  TableColumns.createdDate,
  {
    key: "groups",
    label: "Группы",
    formatter: (value) => (value ? value.map((g) => g.name).join(", ") : ""),
  },
];

export const addConfig = [
  TableColumns.name,
  {
    key: "groups",
    label: "Группы",
    inputType: inputTypeEnum.select,
    options: [],
    multiple: true
  },
];
export const editConfig = [...addConfig];
