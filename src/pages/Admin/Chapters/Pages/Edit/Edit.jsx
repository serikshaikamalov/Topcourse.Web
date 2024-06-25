import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import { formFields } from "../../helpers/form-fields";
import chaptersService from "services/chaptersService";
import { mapFieldWithOptions } from "helpers/mapFieldWithOptions";

const EditPage = ({
  router: {
    navigate,
    params: { id: chapterId },
  },
  data: { chapter },
}) => {
  const onSubmit = (formData) => {
    chaptersService.put(chapter.id, formData).then(() => navigate(-1));
  };

  const fieldsWithOptions = mapFieldWithOptions(formFields, {
    courseId: { defaultValue: chapterId },
  });

  return (
    <CrudPage title="Обновление глав">
      <AppForm onSubmit={onSubmit} data={chapter} fields={fieldsWithOptions} />
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(EditPage, (router) => {
    return useLoadAll({
      chapter: () => chaptersService.get(router.params.id),
    });
  })
);
