import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const getColumnConfig = (onDelete, loadData) => [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "phone",
    label: "Phone",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "createdAt",
    label: "Created Date",
    formatter: (value) => value,
  },
  ...commonColumnConfig(onDelete, loadData),
];

const commonColumnConfig = (onDelete, loadData) => {
  return [
    {
      key: "edit",
      label: "Edit",
      render: (i) => {
        return (
          <Link to={`edit/${i.id}`}>
            <Button>Edit</Button>
          </Link>
        );
      },
    },
    {
      key: "delete",
      label: "Delete",
      render: (item) => {
        return (
          <Button
            onClick={() => {
              onDelete(item.id).then(() => {
                loadData();
              });
            }}
          >
            Удалить
          </Button>
        );
      },
    },
  ];
};
