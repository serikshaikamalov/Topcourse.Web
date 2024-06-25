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
import { AiFillFire, AiOutlineFire } from "react-icons/ai";
import coursesAdminService from "services/admin/coursesAdminService";
import { statsAdminService } from "services/admin/statsService";

const columnConfig = [
  {
    key: "lessonName",
    label: "Урок",
    render: (item, inx) => {
      return (
        <span>
          <AiFillFire color="#FF5722"></AiFillFire> {item.lessonName}
        </span>
      );
    },
  },
  {
    key: "count",
    label: "Количество просмотров",
  },
];

const PopularLessons = ({ data: { courses } }) => {
  const [courseId, setCourseId] = useState(
    courses?.length > 0 ? courses[0].id : undefined
  );
  const [tableData, setTableDate] = useState([]);

  useEffect(() => {
    if (courseId) {
      // Загружаем успеваемость по курсу
      statsAdminService.getMostPopularLessons(courseId).then(({ data }) => {
        setTableDate(data);
      });
    }
  }, [courseId]);

  return (
    <Card>
      <CardHeader title="Самые просмотриваемые уроки"></CardHeader>
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

export default withRemoteDataAndSpinner(PopularLessons, () =>
  useLoadAll({
    courses: coursesAdminService.getAll,
  })
);
