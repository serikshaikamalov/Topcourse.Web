import inputTypeEnum from "enums/inputTypes";
import { TableColumns } from "../helpers/tableColumns";
import { toFullDateName } from "helpers/dateHelper";

export const listConfig = [
  TableColumns.index,
  TableColumns.name,
  {
    key: "flow",
    label: "Поток",
    formatter: (v: any) => (v ? v.name : "Значение не установлено"),
  },
  {
    key: "startDate",
    label: "Дата начало курса",
    inputType: inputTypeEnum.date,
    required: true,
    formatter: (v: string) => (v ? toFullDateName(v) : "Установите дату"),
  },
  {
    key: "accessEndDate",
    label: "Доступ закроется",
    inputType: inputTypeEnum.date,
    required: true,
    formatter: (v: string) => (v ? toFullDateName(v) : "Установите дату"),
  },
];

export const addConfig = [
  TableColumns.name,
  TableColumns.comment,
  {
    key: "courseId",
    label: "Курсы",
    inputType: inputTypeEnum.select,
    options: [],
    required: true,
  },
  {
    key: "students",
    label: "Пользователи",
    inputType: inputTypeEnum.select,
    options: [],
    multiple: true,
  },
  {
    key: "startDate",
    label: "Дата начало курса",
    inputType: inputTypeEnum.date,
    required: true,
    formatter: (v: string) => (v ? toFullDateName(v) : "Установите дату"),
  },
  {
    key: "accessDuration",
    label: "Продолжительность доступа в днях",
    required: true,
  },
];
export const editConfig = [...addConfig, TableColumns.isActive];
