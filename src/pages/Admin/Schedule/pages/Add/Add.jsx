import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import coursesAdminService from "services/admin/coursesAdminService";
import scheduleAdminService from "services/admin/scheduleAdminService";
import flowsService from "services/flowsService";

import AppForm from "components/AppForm/AppForm";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";
import { addConfig } from "tableColumns/schedule-columns";

const AddPage = ({ router: { navigate }, data: { courses, flows } }) => {
  const fieldsWithData = mapFieldWithOptions(addConfig, {
    course: { options: courses },
    flow: { options: flows },
  });

  const onSubmit = (formData) => {
    if (!formData.flow || !formData.course) {
      return alert("Выберите курс или поток");
    }

    let toBackendModel = {
      courseId: formData.course.id,
      flowId: formData.flow.id,
    };
    scheduleAdminService.post(toBackendModel).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание расписания">
      <AppForm onSubmit={onSubmit} fields={fieldsWithData}></AppForm>
    </CrudPage>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(AddPage, () => {
    return useLoadAll({
      courses: () => coursesAdminService.getAll(),
      flows: () => flowsService.getAll(),
    });
  })
);
