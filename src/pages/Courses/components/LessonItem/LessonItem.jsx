import { Link } from "react-router-dom";
import LessonOptions from "../LessonOptions/LessonOptions";
import "./lesson-item.scss";

const LessonItem = ({ lesson, index, hasPermission = false }) => (
  <Link
    to={(lesson.active || hasPermission) && "lessons/" + lesson.id + "/theory"}
    key={index}
    className={
      "lesson__link " + (lesson.active || hasPermission ? "active" : "inactive")
    }
  >
    <div className="course-lesson flex-row p-16">      
      <div className="lesson__name flex-1">
        <div className="lesson-name-header m-b-16">
          <span className="fs-20">{lesson.name}</span>
        </div>
        <div className="lesson-name-description text-muted">
          {lesson?.subTitle}
        </div>
      </div>
      <div className="text-right">
        <LessonOptions lesson={lesson} />
      </div>
    </div>
  </Link>
);

export default LessonItem;
