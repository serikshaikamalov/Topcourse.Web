import { getUrlParams } from "helpers/url";
import { useLocation, useNavigate, useParams } from "react-router-dom";

/**
 * Добавляет на компонент router
 * @param {*} Component
 * @returns
 */
function withRouter(Component) {
  function ComponentWithRouterProp(props, ...rest) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    const queryParams = getUrlParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params, queryParams }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
