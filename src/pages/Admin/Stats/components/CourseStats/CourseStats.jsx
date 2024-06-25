import { groupBy } from "helpers/utils";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { statsAdminService } from "services/admin/statsService";
import "./coursestats.scss";
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import CoursesAdminService from "services/admin/coursesAdminService";
import { useLoadAll } from "hooks/useLoadAll";
import groupsAdminService from "services/admin/groupsAdminService";

const CourseStats = ({ data: { courses } }) => {
  const [courseId, setCourseId] = useState(
    courses?.length > 0 ? courses[0].id : undefined
  );
  const [lessonHistory, setLessonHistory] = useState(null);
  const [groupId, setGroupId] = useState(0);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (courseId) {
      // Загружаем успеваемость по курсу
      statsAdminService.getCourseState(courseId).then(({ data }) => {
        setLessonHistory(data);
      });
    }
  }, [courseId]);

  useEffect(() => {
    // Загружаем группы
    if (courseId) {
      groupsAdminService.findAllByCourseId(courseId).then(({ data }) => {
        console.log(data);
        setGroups(data);
      });
    }
  }, [courseId]);

  if (!lessonHistory) {
    return <div>История отстуствует</div>;
  }

  const courseGrouppedessons = groupBy(lessonHistory, "lessonId");
  const lessons = Object.entries(courseGrouppedessons).map((l) => {
    const lessons = l[1];
    let startedCount = 0;
    let finishedCount = 0;

    if (lessons) {
      startedCount =
        lessons.find((x) => x.started && x.finished === false)?.count || 0;
      finishedCount = lessons.find((x) => x.finished)?.count || 0;
    }

    return {
      startedCount,
      finishedCount,
      lessonName: lessons[0].lessonName,
      chapterPosition: lessons[0].chapterPosition,
      lessonOrder: lessons[0].lessonOrder,
    };
  });

  return (
    <Card>
      <CardHeader title="Успеваемость студентов"></CardHeader>
      <CardContent>
        <div className="flex justify-end gap-1">
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

          <FormControl>
            <InputLabel>Группа</InputLabel>
            <Select
              value={groupId}
              onChange={(e) => {
                setGroupId(e.target.value);
              }}
            >
              <MenuItem key={"all"} value={0}>
                Все группы
              </MenuItem>
              {groups?.map((g, inx) => {
                return (
                  <MenuItem key={inx} value={g.id}>
                    {g.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Урок</TableCell>
              <TableCell>Студенты читают</TableCell>
              <TableCell>Прошли урок</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lessons?.map((l, inx) => {
              return (
                <TableRow key={inx}>
                  <TableCell>
                    {l.chapterPosition}.{l.lessonOrder} {l.lessonName}
                  </TableCell>
                  <TableCell>{l.startedCount}</TableCell>
                  <TableCell>{l.finishedCount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default withRemoteDataAndSpinner(CourseStats, () =>
  useLoadAll({
    courses: CoursesAdminService.getAll,
  })
);
