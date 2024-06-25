import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const operationsColumns = function (onDelete, loadData) {
  return [
    {
      key: "edit",
      label: "Редактировать",
      isOptional: true,
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
      label: "Удалить",
      isOptional: true,
      render: (item) => {
        return (
          <Button
            onClick={() => {
              const isConfirmed = window.confirm(
                "Вы точно хотите удалить контент?"
              );
              if (isConfirmed) {
                onDelete(item.id).then(() => {
                  loadData();
                });
              }
            }}
          >
            Удалить
          </Button>
        );
      },
    },
  ];
};
