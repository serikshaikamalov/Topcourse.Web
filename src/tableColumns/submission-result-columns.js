import { TableColumns } from "../helpers/tableColumns";

export const submissionResultColumnListConfig = [
  {
    key: "question.title",
    label: "Вопрос",
  },
  {
    key: "userAnswer.title",
    label: "Ответ",
  },
  {
    key: "userAnswer.isRightAnswer",
    label: "Правильный ответ",
    formatter: (value) => String(value),
  },
  TableColumns.createdDate,
];

export const submissionResultColumnFormAddConfig = [
  TableColumns.name,
  TableColumns.description,
];
export const submissionResultColumnFormEditConfig = [
  TableColumns.name,
  TableColumns.description,
  TableColumns.isActive,
];
