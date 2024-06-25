import ListPage from "components/ListPage/ListPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import { listConfig } from "tableColumns/posts-columns";
import AppAdminTable from "components/AppAdminTable/AppAdminTable";
import service from "services/postsService";
import { IPost } from "interfaces/entities/post.interface";
import { ListProps } from "interfaces/ui/list-props.interface";

const List: React.FC<ListProps<IPost>> = ({ data, loadData }) => {
  const onDelete = ({ id }: IPost) => {
    service.delete(id).then(() => {
      loadData();
    });
  };

  return (
    <ListPage pageTitle="Список постов">
      <AppAdminTable
        columnConfig={listConfig}
        data={data}
        onDelete={onDelete}
      />
    </ListPage>
  );
};

export default withRemoteDataAndSpinner(List, () => {
  return useRemoteResource(service.getAll);
});
