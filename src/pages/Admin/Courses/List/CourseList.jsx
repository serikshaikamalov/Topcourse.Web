import ListPage from "../../../../components/ListPage/ListPage";
import { useRemoteResource } from "../../../../hooks/useRemoteResource";
import CoursesService from "../../../../services/admin/coursesAdminService";
import { courseColumnListConfig as config } from "tableColumns/course-columns";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";

const AdminCourseList = ({ data, loadData }) => {
  const onDelete = (item) => {
    CoursesService.delete(item.id).then(() => {
      loadData();
    });
  };

  return (
    <ListPage pageTitle="Список курсов">
      <AppAdminTable
        columnConfig={config}
        data={data}
        onDelete={onDelete}
      ></AppAdminTable>
    </ListPage>
  );
};

export default withRemoteDataAndSpinner(AdminCourseList, () => {
  return useRemoteResource(CoursesService.getAll);
});
