import CrudPage from "components/CrudPage/CrudPage";
import withRouter from "hoc/withRouter";
import AdminLessonForm from "pages/Admin/Lessons/_componets/LessonsForm/LessonsForm";
import lessonsAdminService from "services/admin/lessonsAdminService";

const AdminLessonAddPage = ({
  router: {
    params: { chapterId, id: courseId },
    navigate,
  },
}) => {
  const onSubmit = async (formData) => {
    console.log("formData: ", formData);
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("text", formData.text);
    fd.append("files", formData.file[0]);
    fd.append("chapterId", chapterId);
    fd.append("courseId", courseId);

    lessonsAdminService.post(fd).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Добавление урока">
      <AdminLessonForm onSubmit={onSubmit}></AdminLessonForm>
    </CrudPage>
  );
};

export default withRouter(AdminLessonAddPage);
