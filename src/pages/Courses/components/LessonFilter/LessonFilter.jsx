import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  loadCourseChaptersAction,
  loadCourseLessonsAction,
} from "redux/actions/coursesActions";

const LessonFilter = ({ courseId }) => {
  const lessonsKey = "lessonsOrder_" + courseId;

  const [search, setSearch] = useState("");
  const [order, setOrder] = useState(
    localStorage.getItem(lessonsKey) === null
      ? true
      : localStorage.getItem(lessonsKey) === "true"
  );
  const dispatch = useDispatch();
  const [inputTouched, setInputTouched] = useState(false);

  /**
   * Fetch data after updating input
   */
  const onTouched = (e) => {
    const name = e.target.id;
    if (!inputTouched) setInputTouched(true);

    if (name === "search") {
      return setSearch(e.target.value);
    }
    if (name === "order") {
      localStorage.setItem(lessonsKey, e.target.checked);
      return setOrder(e.target.checked);
    }
  };

  useEffect(() => {
    dispatch(loadCourseChaptersAction(+courseId, { search, order }));
  }, [search, order]);

  return (
    <div className="container m-b-32 m-t-32">
      <form className="flex-row flex-center w-fit-content m-l-auto">
        <div className="m-r-8">
          <input
            type="search"
            name=""
            id="search"
            placeholder="Сабақты іздеу"
            autoComplete="off"
            value={search}
            onChange={onTouched}
          />
        </div>
        {/* <div>
          <input
            type="checkbox"
            name="order"
            id="order"
            defaultChecked={order}
            onChange={onTouched}
          />
          <label className="m-l-4" htmlFor="order">
            Сабақты басынан көрсету
          </label>
        </div> */}
      </form>
    </div>
  );
};

export default LessonFilter;
