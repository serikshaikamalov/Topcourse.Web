import React from "react";
import "./pagination.css";

const Pagination = ({ total, limit, page, onPageChange }) => {
  if (!total) {
    return <div></div>;
  }

  const pagesCount = parseInt(total / limit) + 1;
  return (
    <div className="app-pagination">
      {new Array(pagesCount).fill("x").map((_, inx) => (
        <div
          key={inx}
          className="app-pagination__item"
          onClick={() =>
            onPageChange({
              page: inx + 1,
            })
          }
        >
          {inx + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
