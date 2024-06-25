import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import withRouter from "hoc/withRouter";
import HomeworkService from "services/homeworkService";
import { addConfig as config } from "tableColumns/homework-columns";

const AdminHomeworkAdd = ({
  router: {
    navigate,
    params: { lessonId },
  },
}) => {
  const onSubmit = (formData) => {
    HomeworkService.post({ ...formData, lessonId }).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Добавление">
      <AppForm fields={config} onSubmit={onSubmit}></AppForm>
    </CrudPage>
  );
};

export default withRouter(AdminHomeworkAdd);
