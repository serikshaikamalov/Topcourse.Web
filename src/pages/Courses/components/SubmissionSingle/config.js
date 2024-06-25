import { Link } from "react-router-dom";

export const tableConfig = [
  {
    key: "id",
    label: "ID",
    render: (item) => {
      return <Link to={`submissions/${item.id}`}>{item.id}</Link>;
    },
  },
  {
    key: "score",
    label: "Баға",
  },
  {
    key: "createdAt",
    label: "Тест тапсырылған уақыт",
  },
];
