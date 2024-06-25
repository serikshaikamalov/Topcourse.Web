import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AppTable from "components/AppTable/AppTable";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useLoadAll } from "hooks/useLoadAll";
import { useEffect, useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { commentsAdminService } from "services/admin/commentsAdminService";
import coursesAdminService from "services/admin/coursesAdminService";

const columnConfig = [
  {
    key: "comment.text",
    label: "Коммент",
    render: (item, inx) => {
      return (
        <span>
          <AiFillFire color="#FF5722"></AiFillFire> {item.comment.text}
        </span>
      );
    },
  },
  {
    key: "comment.author.name",
    label: "Пользователь",
  },
  {
    key: "course.name",
    label: "Курс",
  },
];

const LastCourseComments = ({ data: { courses } }) => {
  const [courseId, setCourseId] = useState(
    courses?.length > 0 ? courses[0].id : undefined
  );
  const [tableData, setTableDate] = useState([]);

  useEffect(() => {
    // Загружаем успеваемость по курсу
    if(courseId){
      commentsAdminService.getAllByCourse(courseId).then(({ data }) => {
        setTableDate(data);
      });
    }
  }, [courseId]);

  return (
    <Card>
      <CardHeader title="Последние комментарий"></CardHeader>
      <CardContent>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Курс</InputLabel>
          <Select
            value={courseId}
            onChange={(e) => {
              console.log(e.target.value);
              setCourseId(e.target.value);
            }}
          >
            {courses.map((c, inx) => {
              return (
                <MenuItem key={inx} value={c.id}>
                  {c.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <AppTable columnConfig={columnConfig} data={tableData}></AppTable>
      </CardContent>
    </Card>
  );
};

export default withRemoteDataAndSpinner(LastCourseComments, () =>
  useLoadAll({
    courses: coursesAdminService.getAll,
  })
);
