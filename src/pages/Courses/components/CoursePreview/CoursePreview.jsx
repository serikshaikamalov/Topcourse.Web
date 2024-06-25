import { Link } from "react-router-dom";
import "./course.scss";
import { Box, LinearProgress } from "@mui/material";
import { MdPlayCircle, MdPlayCircleOutline } from "react-icons/md";
import { toFullDateName, toNativeDate } from "helpers/dateHelper";

const CoursePreview = ({ course }) => {
  const percentage =
    (100 / course.lessonCount) * (course.finishedLessonCounts || 0);

  const openedLessonLink = course.openedLesson
    ? "/courses/" +
    course.id +
    "/lessons/" +
    course.openedLesson?.lessonId +
    "/theory"
    : "/courses/" + course.id;

  return (
    <div className="coures-preview">
      <div className="course-preview__image">
        <img
          alt=""
          src={course.image ? course.image : "../media/images/img3.jpg"}
        />
      </div>
      <div className="course-preview__body w-full">
        <Link
          className="course-preview__course-name"
          to={"/courses/" + course.id}
        >
          <span className="m-t-4 m-b-4">{course.name}</span>
        </Link>

        {course.openedLesson && (
          <Link className="course-preview__lesson-name" to={openedLessonLink}>
            <span className="m-t-4 m-b-4">
              {course.openedLesson.chapterPosition}.
              {course.openedLesson.lessonOrder}{" "}
              {course.openedLesson?.lessonName}
            </span>
          </Link>
        )}

        {/* Progress */}
        <div className="course-progress-bar">
          <Link to={openedLessonLink}>
            <MdPlayCircle></MdPlayCircle>
            <span>
              {" "}
              {course.openedLesson ? "Продолжить урок" : "Начать курс"}{" "}
            </span>
          </Link>
          <LinearProgress
            className="course-progress-bar__line"
            variant="determinate"
            value={percentage}
          />
          <span>{Math.round(percentage)}%</span>
        </div>

        {course.lessonCount && (
          <div className="course__hours">
            <span>
              {course.finishedLessonCounts || 0} урок из {course.lessonCount}{" "}
              уроков
            </span>
          </div>
        )}
        {course.subscription && <div className="text-right fs-12">Доступ закроется: {toFullDateName(course.subscription?.expiredAt)}</div>}
      </div>
    </div>
  );
};

export default CoursePreview;
