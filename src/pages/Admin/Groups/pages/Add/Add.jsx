import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import moment from "moment";
import coursesAdminService from "services/admin/coursesAdminService";
import groupsAdminService from "services/admin/groupsAdminService";
import usersAdminService from "services/admin/usersService";
import { toBackendDTO } from "services/dtoSerializer";
import { addConfig } from "tableColumns/groups-columns";

const AdminGroupsAddPage = ({ router: { navigate }, data }) => {
  const fieldsWithData = mapFieldWithOptions(addConfig, {
    courseId: { options: data.courses },
    students: { options: data.students },
  });

  const onSubmit = (formData) => {
    formData = toBackendDTO(formData);
    if (!formData.startDate || !formData.accessDuration) {
      return alert("Пожалуйста заполните все обязательные поля!");
    }

    const accessEndDate = moment(formData.startDate)
      .add(formData.accessDuration, "day")
      .format("YYYY-MM-DD");

    return groupsAdminService
      .post({ ...formData, accessEndDate })
      .then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание группы">
      <AppForm onSubmit={onSubmit} fields={fieldsWithData} />
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(AdminGroupsAddPage, (router) => {
    return useLoadAll({
      courses: coursesAdminService.getAll,
      students: () =>
        usersAdminService.getAll({
          showFullInfo: false,
        }),
    });
  })
);
