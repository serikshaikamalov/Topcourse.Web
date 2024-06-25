import AppTable from "components/AppTable/AppTable";
import ListPage from "components/ListPage/ListPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import SubmissionsService from "services/submissionsService";
import { submissionColumnListConfig as config } from "tableColumns/submission-columns";

const AdminSubmissionListPage = ({ data }) => {
  return (
    <ListPage pageTitle="Результаты тестирования студентов">
      <AppTable data={data} columnConfig={config}></AppTable>
    </ListPage>
  );
};

export default withRemoteDataAndSpinner(AdminSubmissionListPage, () => {
  return useRemoteResource(SubmissionsService.getAll);
});
