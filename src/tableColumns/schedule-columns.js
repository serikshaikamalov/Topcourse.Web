import inputTypeEnum from "enums/inputTypes";
import { TableColumns } from "../helpers/tableColumns";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const listConfig = [
  TableColumns.id,
  {
    key: "course",
    label: "Курс",
    formatter: (v) => (v ? v["name"] : "Отсутсвует"),
  },
  {
    key: "flow",
    label: "Поток",
    formatter: (v) => (v ? v["name"] : "Отсутсвует"),
  },
  {
    key: "lessons",
    label: "Расписание по урокам",
    render(item) {
      return (
        <Link to={`${item.id}/lessons`} relative>
          <Button>Управление по урокам</Button>
        </Link>
      );
    },
  },
];

export const addConfig = [
  {
    key: "course",
    label: "Курс",
    inputType: inputTypeEnum.select,
  },
  {
    key: "flow",
    label: "Поток",
    inputType: inputTypeEnum.select,
  },
];
export const editConfig = [...addConfig];
