import "./course-lessons.scss";
import ChapterItem from "../ChapterItem/ChapterItem";
import withRouter from "hoc/withRouter";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useLoadAll } from "hooks/useLoadAll";
import chaptersStudentService from "services/chaptersStudentService";

/**
 1. + Загружать уроки и показать spinner
 2. Фильтрация и поск, делаем запрос к бэку и показываем Spinner
 3. Показать загрузку 
 4. Показать ошибку
 5. Возможность делать фильтрацию и поиск на фронтенде

 What about using QueryParams approach
 How call getAll method inside component
 */
const CourseLessons = ({ data: { courseLessons } }) => {
  return (
    <>
      {courseLessons && (
        <div className="container">
          <div className="course-lessons">
            {courseLessons.map((chapter, inx) => {
              return <ChapterItem chapter={chapter} key={inx} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(CourseLessons, (router) => {
    return useLoadAll({
      courseLessons: () => {
        return chaptersStudentService.getAllByCourseId(router.params.id);
      },
    });
  })
);
