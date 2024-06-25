import React from "react";

export const LessonMedias = ({ data }) => {
  if (!data) {
    return <div></div>;
  }
  return (
    <div class="my-8">
      {data.map((m, index) => {
        return (
          <a
            className="fw-500 color-red fs-20"
            target="_blank"
            href={`https://storage.googleapis.com/frontends-f1a04.appspot.com/${m.media.fullPath}`}
          >
            Вложенный файл #{index + 1}
          </a>
        );
      })}
    </div>
  );
};
