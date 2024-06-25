import { TableColumns } from "../helpers/tableColumns";

export const answerColumnListConfig = [
  TableColumns.id,
  TableColumns.title,
  TableColumns.isActive,
  {
    key: "isRightAnswer",
    label: "Right?",
    formatter: (v) => (v && String(v)) || "",
  },
];

export const answerColumnFormAddConfig = [
  TableColumns.title,
  {
    key: "isRightAnswer",
    label: "Right?",
    inputType: "checkbox",
  },
];

export const answerColumnFormEditConfig = [
  TableColumns.title,
  TableColumns.isActive,
  {
    key: "isRightAnswer",
    label: "Right?",
    inputType: "checkbox",
  },
];
