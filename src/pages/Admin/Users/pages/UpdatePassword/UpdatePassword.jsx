import AppForm from "components/AppForm/AppForm";
import CrudPage from "components/CrudPage/CrudPage";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useLoadAll } from "hooks/useLoadAll";
import usersService from "services/admin/usersService";

const UpdatePasswordPage = ({
  router: { navigate, params },
  data: { user },
}) => {
  const onSubmit = (formData) => {
    console.log("updatePassword", formData);
    usersService.updatePassword(params.id, formData).then(() => navigate(-1));
  };

  return (
    <CrudPage title="Установить новый пароль">
      
      <h4 className="m-t-8 m-b-8">Пользователь: {user.name}({user.email})</h4>
      <AppForm
        onSubmit={onSubmit}
        fields={[
          {
            key: "password",
            label: "Новый пароль",
          },
        ]}
      />
    </CrudPage>
  );
};
export default withRouter(
  withRemoteDataAndSpinner(UpdatePasswordPage, (router) => {
    return useLoadAll({
      user: () => usersService.get(router.params.id),
    });
  })
);
