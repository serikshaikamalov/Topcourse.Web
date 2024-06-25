import CommentsWrapper from "pages/Courses/components/CommentsWrapper/CommentsWrapper";
import "./lesson.scss";
import LessonTextFormatter from "components/LessonTextFormatter/LessonTextFormatter";
import { Button } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import CourseDrawer from "components/CourseDrawer/CourseDrawer";
import { useNavigate, useParams } from "react-router-dom";
import LessonsService from "services/lessonsService";
import { LessonMedias } from "pages/Courses/components/LessonMedias/LessonMedias";

const Lesson = ({ lesson }) => {
  console.log("Lessons: render");

  const navigate = useNavigate();
  const { id: courseId } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [chapters, setChapters] = useState([]);

  const handleDrawerToggle = () => {
    setIsVisible(!isVisible);
  };

  const goPrevLesson = () => {
    if (plainLessons) {
      const currentIndex = plainLessons.findIndex((x) => x.id === lesson.id);

      const prevItem = plainLessons[currentIndex - 1];
      if (prevItem) {
        navigate(`/courses/${prevItem.courseId}/lessons/${prevItem.id}`);
      }
    }
  };

  const plainLessons = useMemo(() => {
    let plainLessons = [];
    if (chapters) {
      plainLessons = chapters.reduce((acc, curr) => {
        return [...acc, ...curr.lessons];
      }, []);
    }

    return plainLessons;
  }, [chapters]);

  const goNextLesson = useCallback(async () => {
    console.log("plainLessons: ", plainLessons);
    if (plainLessons) {
      const currentIndex = plainLessons.findIndex((x) => x.id === lesson.id);

      const nextItem = plainLessons[currentIndex + 1];
      console.log("nextItem:", nextItem);
      if (nextItem) {
        try {
          // Проверка на стоп урок
          await LessonsService.get(nextItem.id);
          navigate(
            `/courses/${nextItem.courseId}/lessons/${nextItem.id}/theory`
          );
        } catch (ex) {
          console.error("NextLesson ex: ", ex);
        }
      }
    }
  }, [lesson.id, navigate, plainLessons]);

  return (
    <>
      <div className="lesson">
        <div className="lesson__content flex-1 h-100">
          <div className="course-nav">
            <Button variant="outlined" onClick={handleDrawerToggle}>
              Программа курса
            </Button>
          </div>
          <div className="lesson__title">
            <h1>{lesson?.name}</h1>
          </div>

          <article className="lesson__article">
            <LessonTextFormatter
              text={lesson?.text}
              lesson={lesson}
            ></LessonTextFormatter>
            <LessonMedias data={lesson?.lessonMedias}></LessonMedias>
          </article>

          <div className="p-t-8">
            <Button variant="text" onClick={goPrevLesson}>
              Предыдущий урок
            </Button>
            <Button variant="text" onClick={goNextLesson}>
              Следующий урок
            </Button>
          </div>
        </div>
        <CourseDrawer
          isVisible={isVisible}
          handleDrawerToggle={handleDrawerToggle}
          courseId={courseId}
          currentChapterId={lesson.chapterId}
          chapters={chapters}
          setChapters={setChapters}
        />
      </div>

      <CommentsWrapper lessonId={lesson.id} />
    </>
  );
};

export default Lesson;
