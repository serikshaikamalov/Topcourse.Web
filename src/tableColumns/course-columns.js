import { Link } from "react-router-dom";
import { TableColumns } from "../helpers/tableColumns";
import { Button } from "@mui/material";
import inputTypeEnum from "enums/inputTypes";

export const courseColumnListConfig = [
  TableColumns.index,
  TableColumns.name,
  TableColumns.createdDate,
  TableColumns.isActive,
  {
    key: "manage_chapters",
    label: "Управление по главам",
    render: (i) => (
      <Link to={`${i.id}/chapters`}>
        <Button>Управление главами</Button>
      </Link>
    ),
  },
];

export const courseColumnFormAddConfig = [
  TableColumns.name,
  TableColumns.description,
  {
    key: "image",
    label: "Рисинок курса",
    inputType: inputTypeEnum.file,
  },
];
export const courseColumnFormEditConfig = [
  TableColumns.name,
  TableColumns.description,
  TableColumns.isActive,
  {
    key: "image",
    label: "Рисинок курса",
    inputType: inputTypeEnum.file,
  },
];
