import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import { toBackendDTO } from "services/dtoSerializer";
import flowsService from "services/flowsService";
import GroupsService from "services/admin/groupsAdminService";
import { editConfig } from "tableColumns/flow-columns";

const EditPage = ({
  router: {
    navigate,
    params: { id },
  },
  data: { groups, flow },
}) => {
  const fieldsWithData = mapFieldWithOptions(editConfig, {
    groups: { options: groups, groups: flow.groups },
  });

  const onSubmit = (formData) => {
    formData = toBackendDTO(formData);
    flowsService.put(id, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редатирование потока">
      <AppForm
        onSubmit={onSubmit}
        data={flow}
        fields={fieldsWithData}
      ></AppForm>
    </CrudPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(EditPage, (router) => {
    return useLoadAll({
      groups: GroupsService.getAll,
      flow: () => flowsService.get(router.params.id),
    });
  })
);
