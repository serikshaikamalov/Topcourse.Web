import { Button } from "@mui/material";
import AppTable from "components/AppTable/AppTable";
import { Link } from "react-router-dom";

export const AppAdminTable = ({
  data,
  columnConfig,
  onDelete,
  allowEditing = true,
  ...rest
}) => {
  const config = [...columnConfig];

  if (allowEditing) {
    config.push({
      key: "edit",
      label: "Редак.",
      isOptional: true,
      render: (i) => {
        return (
          <Link to={`edit/${i.id}`}>
            <Button>Редак.</Button>
          </Link>
        );
      },
    });
  }

  if (onDelete) {
    config.push({
      key: "delete",
      label: "Удаление",
      isOptional: true,
      render: (item) => {
        return (
          <Button
            onClick={() => {
              const isConfirmed = window.confirm(
                "Вы точно хотите удалить данный ресурс?"
              );

              if (isConfirmed) {
                onDelete(item);
              }
            }}
          >
            Удалить
          </Button>
        );
      },
    });
  }

  return <AppTable data={data} columnConfig={config} {...rest}></AppTable>;
};

export default AppAdminTable;
