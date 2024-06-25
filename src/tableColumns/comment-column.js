import { TableColumns } from "../helpers/tableColumns";

export const listConfig = [
  TableColumns.id,
  {
    key: "comment.text",
    label: "Текс",
    formatter: (v) => v && v.slice(0, 50),
  },
  {
    key: "course",
    label: "Курс",
    formatter: (item) => (item?.name ? item.name.slice(0, 50) : "Курс отсутсвует"),
  },
  TableColumns.createdDate,
  {
    key: "go",
    label: "Ответить",
  },
];
