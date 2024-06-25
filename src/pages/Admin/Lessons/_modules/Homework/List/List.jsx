import { listConfig as config } from "tableColumns/homework-columns";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";
import messages from "messages/message";
import HomeworkService from "services/homeworkService";
import withRouter from "hoc/withRouter";
import ListPage from "components/ListPage/ListPage";
import { useRemoteResource } from "hooks/useRemoteResource";

const AdminHomeworkList = ({ data, loadData }) => {
  const onDelete = (item) => {
    HomeworkService.delete(item.id).then(() => {
      loadData();
    });
  };

  return (
    <ListPage pageTitle={messages.homeworks_list}>
      <AppAdminTable
        columnConfig={config}
        data={data}
        onDelete={onDelete}
      ></AppAdminTable>
    </ListPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(AdminHomeworkList, (router) => {
    return useRemoteResource(
      HomeworkService.getAllByLessonId,
      router.params.lessonId
    );
  })
);
