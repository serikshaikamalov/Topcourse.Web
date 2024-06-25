import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import withRouter from "hoc/withRouter";
import service from "services/postsService";
import { addConfig as config } from "tableColumns/posts-columns";

const AddPage = ({ router: { navigate } }) => {
  const onSubmit = (formData) => {
    service.post(formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание поста">
      <AppForm onSubmit={onSubmit} fields={config} />
    </CrudPage>
  );
};
export default withRouter(AddPage);
