import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AppForm from "../../../../../components/AppForm/AppForm";
import { mapFieldWithOptions } from "../../../../../helpers/mapFieldWithOptions";
import { withRemoteDataAndSpinner } from "../../../../../hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "../../../../../hooks/useRemoteResource";
import SubscriptionService from "../../../../../services/subscriptionService";
import { formFields } from "../../helpers/form-fields";
import { useLoadFormOptions } from "../../../../../hooks/useLoadFormOptions";
import CoursesService from "services/coursesService";
import usersService from "services/admin/usersService";

const AdminSubscriptionEditPage = ({ data: options }) => {
  const fieldsWithOptions = mapFieldWithOptions(formFields, options);
  const { id } = useParams();
  const [data] = useRemoteResource(SubscriptionService.get, id);
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    SubscriptionService.put(id, formData).then(() => navigate(-1));
  };

  return (
    <div className="container content">
      <div>
        <Button onClick={() => navigate(-1)}>Назад</Button>
        <h2>Редактирование подписки</h2>
      </div>

      {data && (
        <AppForm
          onSubmit={onSubmit}
          data={data}
          fields={fieldsWithOptions}
        ></AppForm>
      )}
    </div>
  );
};
export default withRemoteDataAndSpinner(AdminSubscriptionEditPage, () => {
  return useLoadFormOptions({
    userId: usersService.getAll,
    courseId: CoursesService.getAll,
  });
});
