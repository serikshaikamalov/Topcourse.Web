import CoursePreview from "../CoursePreview/CoursePreview";
import "./my-courses.scss";

const Courses = ({ data }) => {
  if (!data || data?.length === 0) {
    return <div>Активные курсы отсутвуют</div>;
  }
  return (
    <>
      <div className="courses">
        <h2 className="course__header">Активные курсы</h2>
        <div className="courses__list">
          {data.map((c, index) => {
            return <CoursePreview key={index} course={c}></CoursePreview>;
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
