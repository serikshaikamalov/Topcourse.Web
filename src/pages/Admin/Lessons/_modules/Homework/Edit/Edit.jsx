import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { editConfig as config } from "tableColumns/homework-columns";
import { useRemoteResource } from "hooks/useRemoteResource";
import AppForm from "components/AppForm/AppForm";
import HomeworkService from "services/homeworkService";

const AdminHomeworkEditPage = ({
  router: {
    navigate,
    params: { homeworkId },
  },
  data,
}) => {
  const onSubmit = (formData) => {
    HomeworkService.put(homeworkId, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редатирование">
      <AppForm onSubmit={onSubmit} data={data} fields={config}></AppForm>
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(AdminHomeworkEditPage, (router) => {
    return useRemoteResource(HomeworkService.get, router.params.homeworkId);
  })
);
