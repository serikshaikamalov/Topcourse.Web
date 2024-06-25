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
import { editConfig } from "tableColumns/groups-columns";

const AdminGroupEditPage = ({
  router: {
    navigate,
    params: { id },
  },
  data: { courses, group, students },
}) => {
  const fieldsWithData = mapFieldWithOptions(editConfig, {
    courseId: { options: courses, courseId: group.courseId },
    students: { options: students },
  });

  const onSubmit = (formData) => {
    formData = toBackendDTO(formData);

    if (!formData.startDate || !formData.accessDuration) {
      return alert("Пожалуйста заполните все обязательные поля!");
    }

    const accessEndDate = moment(formData.startDate)
      .add(formData.accessDuration, "day")
      .format("YYYY-MM-DD");

    groupsAdminService
      .put(id, { ...formData, accessEndDate })
      .then(() => navigate(-1));
  };

  return (
    <CrudPage title="Редатирование группы">
      <AppForm
        onSubmit={onSubmit}
        data={group}
        fields={fieldsWithData}
      ></AppForm>
    </CrudPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(AdminGroupEditPage, (router) => {
    return useLoadAll({
      courses: coursesAdminService.getAll,
      students: () =>
        usersAdminService.getAll({
          showFullInfo: false,
        }),
      group: () => groupsAdminService.get(router.params.id),
    });
  })
);
