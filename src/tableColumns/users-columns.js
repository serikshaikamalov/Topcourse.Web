import inputTypeEnum from "enums/inputTypes";
import { TableColumns } from "../helpers/tableColumns";
import { arrayToString } from "helpers/utils";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const listConfig = [
  TableColumns.index,
  {
    key: "name",
    label: "ФИО",
  },
  TableColumns.email,
  TableColumns.phone,
  TableColumns.roles(),
  TableColumns.createdDate,
  {
    key: "groups",
    label: "Группы",
    formatter: (v) => arrayToString(v),
  },
  TableColumns.ban,
  {
    key: "updatePassword",
    label: "Пароль",
    isOptional: true,
    render: (item) => {
      return (
        <Link to={`${item.id}/updatePassword`}>
          <Button>Пароль</Button>
        </Link>
      );
    },
  },
];

export const listConfigSuperAdmin = [...listConfig, TableColumns.createdBy];

export const addConfig = [
  TableColumns.name,
  TableColumns.email,
  TableColumns.phone,
  TableColumns.password,
  TableColumns.comment,
  {
    key: "roles",
    label: "Роли",
    inputType: inputTypeEnum.select,
    options: [],
    multiple: true,
  },
  {
    key: "groups",
    label: "Группы",
    inputType: inputTypeEnum.select,
    options: [],
    multiple: true,
  },
];
export const editConfig = [...addConfig.filter((x) => x.key !== "password")];
