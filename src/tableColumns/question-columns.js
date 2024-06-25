import { Button } from "@mui/material";
import inputTypeEnum from "enums/inputTypes";
import { Link } from "react-router-dom";
import { TableColumns } from "../helpers/tableColumns";

export const questionColumnListConfig = [
  TableColumns.id,
  TableColumns.title,
  {
    key: "add_answers",
    label: "Add answers",
    render: (i) => (
      <Link to={`${i.id}/answers`}>
        <Button>Add answers</Button>
      </Link>
    ),
  },
];
export const questionColumnFormAddConfig = [
  {
    key: "title",
    label: "Title",
    inputType: inputTypeEnum.richText,
  },
];

export const questionColumnFormEditConfig = [
  {
    key: "title",
    label: "Title",
    inputType: inputTypeEnum.richText,
  },
  TableColumns.isActive,
];
