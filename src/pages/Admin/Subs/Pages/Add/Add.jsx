import { useNavigate } from "react-router-dom";
import AppForm from "../../../../../components/AppForm/AppForm";
import { mapFieldWithOptions } from "../../../../../helpers/mapFieldWithOptions";
import CoursesService from "../../../../../services/coursesService";
import SubscriptionService from "../../../../../services/subscriptionService";
import { formFields } from "../../helpers/form-fields";
import { useLoadFormOptions } from "../../../../../hooks/useLoadFormOptions";
import CrudPage from "../../../../../components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "../../../../../hoc/withRemoteDataAndSpinner";
import usersService from "services/admin/usersService";
import { toBackendDTO } from "services/dtoSerializer";

const AdminSubscriptionAddPage = ({ data }) => {
  // Переписать
  const fieldsWithOptions = mapFieldWithOptions(formFields, data);
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    formData = toBackendDTO(formData);
    SubscriptionService.post(formData)
      .then(
        () => alert("User is updated"),
        (error) => alert("Something wrong: ", error)
      )
      .then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание подписки">
      <AppForm onSubmit={onSubmit} fields={fieldsWithOptions}></AppForm>
    </CrudPage>
  );
};

export default withRemoteDataAndSpinner(AdminSubscriptionAddPage, () => {
  return useLoadFormOptions({
    userId: usersService.getAll,
    courseId: CoursesService.getAll,
  });
});
