import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadFormOptions } from "hooks/useLoadFormOptions";
import { toBackendDTO } from "services/dtoSerializer";
import service from "services/flowsService";
import GroupsService from "services/admin/groupsAdminService";
import { addConfig } from "tableColumns/flow-columns";

const AddPage = ({ router: { navigate }, data }) => {
  const fieldsWithOptions = mapFieldWithOptions(addConfig, data);

  const onSubmit = (formData) => {
    formData = toBackendDTO(formData);
    service.post(formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание потока">
      <AppForm onSubmit={onSubmit} fields={fieldsWithOptions} />
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(AddPage, () => {
    return useLoadFormOptions({
      groups: GroupsService.getAll,
    });
  })
);
