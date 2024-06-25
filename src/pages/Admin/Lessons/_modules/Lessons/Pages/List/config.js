import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TableColumns } from "../../../../../../../helpers/tableColumns";

export const columnConfig = [
  TableColumns.order,
  TableColumns.name,
  TableColumns.active,
  {
    key: "view",
    label: "View",
    render: (i) => {
      return (
        <Link to={`/courses/${i?.courseId}/lessons/${i.id}`} target={"_blank"}>
          <Button>View</Button>
        </Link>
      );
    },
  },
  {
    key: "manage",
    label: "Управление",
    render: (i) => {
      return (
        <Link to={`${i.id}/quiz`}>
          <Button>Управление</Button>
        </Link>
      );
    },
  },
];
