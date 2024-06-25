import { Link } from "react-router-dom";
import "./chapter-item.scss";
import { useState } from "react";

const ChapterItem = ({ chapter, index }) => {
  const [opened, setOpened] = useState();

  return (
    <div className="chapter-item p-16">
      <h2 className="fs-20 m-b-16" onClick={() => setOpened(!opened)}>
        {chapter.position}. {chapter.name}
      </h2>
      {opened && (
        <ul>
          {chapter.lessons.map((l, inx) => {
            return (
              <li key={inx}>
                <Link to={`lessons/${l.id}/theory`}>
                  {l.order}. {l.name}{" "}
                  <span style={{fontSize: 11}}>{l.isStop ? "(Стоп-урок)" : ""}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ChapterItem;
