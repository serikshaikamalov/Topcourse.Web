import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import CourseHeader from "pages/Courses/components/CourseHeader/CourseHeader";
import CoursesService from "services/coursesService";
import CourseLessons from "../../components/CourseLessons/CourseLessons";

const CourseDetail = ({
  data,
  router: {
    params: { id: courseId },
  },
}) => {
  console.log("data::", data);
  return (
    <div>
      <CourseHeader data={data} />
      <CourseLessons courseId={courseId} />
    </div>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(CourseDetail, (router) =>
    useRemoteResource(CoursesService.get, router.params.id)
  )
);
