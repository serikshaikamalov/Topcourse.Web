import { withUser } from "hoc/withUser";
import MyCourses from "../../../Courses/components/MyCourses/MyCourses";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useLoadAll } from "hooks/useLoadAll";
import CoursesService from "services/coursesService";

const ProfileProgress = ({ data: { userCourses } }) => {
  return (
    <>
      <div className="img_block">
        <img
          style={{ objectFit: "cover", height: 100 }}
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="phone"
          className="md:h-100 rounded-xl"
        />
      </div>
      <MyCourses data={userCourses} />
    </>
  );
};

export default withUser(
  withRemoteDataAndSpinner(ProfileProgress, () => {
    return useLoadAll({
      userCourses: CoursesService.me,
    });
  })
);
