import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TableColumns } from "../../../../../../../../helpers/tableColumns";

export const columnConfig = [
  TableColumns.id,
  TableColumns.title,
  TableColumns.text,
  TableColumns.isActive,
  TableColumns.createdDate,
  {
    key: "questions",
    label: "Questions",
    render: (item) => {
      return (
        <Link to={`${item.id}/questions`}>
          <Button>Add Questions</Button>
        </Link>
      );
    },
  },
];
