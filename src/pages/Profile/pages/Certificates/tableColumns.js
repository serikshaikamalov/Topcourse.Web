import { Link } from "react-router-dom";

export const columnConfig = [
  {
    key: "id",
    label: "ID",
    render: (i) => {
      return (
        <Link target="_blank" to={`/certificates/${i.id}`}>
          {i.id}
        </Link>
      );
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
  },
];
