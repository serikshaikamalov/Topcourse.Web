import { Link } from "react-router-dom";
import { TableColumns } from "../helpers/tableColumns";

export const submissionColumnListConfig = [
  TableColumns.id,
  {
    key: "user.name",
    label: "User",
  },
  {
    key: "quiz.title",
    label: "Тест",
    render: (item) => <Link to={`${item.id}`}>{item.quiz?.title}</Link>,
  },
  {
    key: "score",
    label: "Оценка, %",
    formatter: (value) => `${value}%`,
  },
  TableColumns.createdDate,
];

export const submissionColumnFormAddConfig = [
  TableColumns.name,
  TableColumns.description,
];
export const submissionColumnFormEditConfig = [
  TableColumns.name,
  TableColumns.description,
  TableColumns.isActive,
];
