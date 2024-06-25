import { Link } from "react-router-dom";
import { operationsColumns } from "../../../../helpers/operationsColumns";
import { Button } from "@mui/material";

export const getColumnConfig = (onDelete, loadData) => [
  {
    key: "position",
    label: "Позиция",
  },
  {
    key: "name",
    label: "Глава",
  },
  {
    key: "course.name",
    label: "Курс",
  },
  {
    key: "manage_lessons",
    label: "Manage lessons",
    render: (i) => (
      <Link to={`${i.id}/lessons`}>
        <Button>Manage lessons</Button>
      </Link>
    ),
  },
  ...operationsColumns(onDelete, loadData),
];
