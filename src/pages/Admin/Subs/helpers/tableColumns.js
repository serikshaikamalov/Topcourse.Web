import { toFullDateName } from "helpers/dateHelper";
import { TableColumns } from "helpers/tableColumns";

export const getColumnConfig = (onDelete, loadData) => [
  TableColumns.index,
  {
    key: "User",
    label: "Студент",
    formatter: (value) => {
      return value ? value["name"] : "";
    },
  },
  {
    key: "Course",
    label: "Курс",
    formatter: (value) => {
      return value ? value["name"] : "Курс остуствует";
    },
  },
  {
    key: "accessStartDate",
    label: "Дата начало",
    formatter: (v) => v && toFullDateName(v),
  },
  {
    key: "expiredAt",
    label: "Дата окончания",
    formatter: (v) => v && toFullDateName(v),
  },
  TableColumns.isActive,
  // ...operationsColumns(onDelete, loadData),
];
