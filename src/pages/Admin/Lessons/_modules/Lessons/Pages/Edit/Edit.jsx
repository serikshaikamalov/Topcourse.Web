import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import AdminLessonForm from "pages/Admin/Lessons/_componets/LessonsForm/LessonsForm";
import lessonsAdminService from "services/admin/lessonsAdminService";

const AdminLessonEditPage = ({
  router: {
    navigate,
    params: { chapterId, lessonId },
  },
  data,
}) => {
  const onSubmit = (formData) => {
    lessonsAdminService.put(lessonId, { ...formData, chapterId }).then(() => {
      navigate(-1);
    });
  };

  return (
    <CrudPage title="Редактирование урока">
      <AdminLessonForm onSubmit={onSubmit} data={data}></AdminLessonForm>
    </CrudPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(AdminLessonEditPage, (router) =>
    useRemoteResource(lessonsAdminService.get, router.params.lessonId)
  )
);
