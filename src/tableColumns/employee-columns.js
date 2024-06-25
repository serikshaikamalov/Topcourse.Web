import inputTypeEnum from "enums/inputTypes";
import { TableColumns } from "../helpers/tableColumns";

export const listConfig = [
  TableColumns.name,
  TableColumns.email,
  TableColumns.phone,
  TableColumns.roles(),
  TableColumns.createdDate,
  {
    key: "isOwner",
    label: "Владелец",
    inputType: inputTypeEnum.checkbox,
    formatter: (v) => (v ? "Да" : "Нет"),
  },
  {
    key: "organization",
    label: "Организация",
    formatter: (v) => (v ? v.name : "Отсутсвует"),
  },
];

export const addConfig = [
  TableColumns.name,
  TableColumns.email,
  TableColumns.phone,
  TableColumns.password,
  TableColumns.comment,
  {
    key: "organization",
    label: "Организация",
    inputType: inputTypeEnum.select,
    options: [],
  },
  {
    key: "roles",
    label: "Роли",
    inputType: inputTypeEnum.select,
    options: [],
    multiple: true,
  },
  {
    key: "isOwner",
    label: "Владелец",
    inputType: inputTypeEnum.checkbox,
  },
];
export const editConfig = [...addConfig.filter((x) => x.key !== "password")];
