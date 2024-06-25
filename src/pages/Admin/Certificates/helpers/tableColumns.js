import { Link } from "react-router-dom";
import { operationsColumns } from "../../../../helpers/operationsColumns";

export const getColumnConfig = (onDelete, loadData) => [
  {
    key: "id",
    label: "ID",
    render: (i) => {
      return <Link target="_blank" to={`/certificates/${i.id}`}>{i.id}</Link>;
    },
  },
  {
    key: "student.name",
    label: "Студент",
  },
  {
    key: "course.name",
    label: "Course",
  },
  {
    key: "givenDate",
    label: "Given Date",
    formatter: (value) => value,
  },
  ...operationsColumns(onDelete, loadData),
];
