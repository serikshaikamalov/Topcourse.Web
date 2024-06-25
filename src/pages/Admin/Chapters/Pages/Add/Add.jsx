import { useNavigate } from "react-router-dom";
import AppForm from "../../../../../components/AppForm/AppForm";
import { formFields } from "../../helpers/form-fields";
import CrudPage from "../../../../../components/CrudPage/CrudPage";
import chaptersService from "services/chaptersService";
import withRouter from "hoc/withRouter";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";

const AddPage = ({
  router: {
    params: { id: courseId },
  },
}) => {
  const navigate = useNavigate();

  const fieldsWithOptions = mapFieldWithOptions(formFields, {
    courseId: { defaultValue: courseId },
  });

  const onSubmit = (formData) => {
    console.log("FormData: ", formData);
    chaptersService
      .post(Object.assign(formData, { courseId }))
      .then(() => navigate(-1));
  };

  return (
    <CrudPage title="Создание глав">
      <AppForm onSubmit={onSubmit} fields={fieldsWithOptions} />
    </CrudPage>
  );
};

export default withRouter(AddPage);
