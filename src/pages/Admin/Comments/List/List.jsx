import { listConfig as config } from "tableColumns/comment-column";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import ListPage from "components/ListPage/ListPage";
import { useLoadAll } from "hooks/useLoadAll";
import AppTable from "components/AppTable/AppTable";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import { Link } from "react-router-dom";
import { commentsAdminService } from "services/admin/commentsAdminService";

const List = ({ data: { comments } }) => {
  const modifiedConfig = mapFieldWithOptions(config, {
    go: {
      render: ({ courseId, lessonId }) => (
        <Link to={`/courses/${courseId}/lessons/${lessonId}/theory`}>
          Ответить
        </Link>
      ),
    },
  });
  return (
    <ListPage pageTitle={"Комментарий"}>
      <AppTable columnConfig={modifiedConfig} data={comments}></AppTable>
    </ListPage>
  );
};

export default withRemoteDataAndSpinner(List, () => {
  return useLoadAll({
    comments: commentsAdminService.findAllByCourses,
  });
});
