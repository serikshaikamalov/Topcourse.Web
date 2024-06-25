import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const DrawerChapterItem = ({ chapter, currentChapterId }) => {
  const [isVisible, setIsVisible] = useState(
    currentChapterId === chapter.id ? true : false
  );

  return (
    <div className="w-100">
      <div
        className="course__chapter-name"
        onClick={(e) => {
          e.stopPropagation();
          setIsVisible(!isVisible);
        }}
      >
        {chapter.position}. {chapter.name}
      </div>
      <div
        className="course__chapter-lessons"
        style={{ display: isVisible ? "block" : "none" }}
      >
        {chapter?.lessons.map((l) => {
          return (
            <div className="course__chapter-lesson" key={l.id}>
              <NavLink to={`/courses/${l.courseId}/lessons/${l.id}`}>
                <AiFillPlayCircle size={18} color="#1976d2" /> {l.order}.{" "}
                {l.name}{" "}
                <span
                  style={{ fontSize: 10, alignSelf: "start"}}
                >
                  {l.isStop ? "(Стоп-урок)" : ""}
                </span>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DrawerChapterItem;
