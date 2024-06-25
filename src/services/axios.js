import axios from "axios";
import { logoutAction } from "redux/actions/authActions";
import store from "redux/store";

const appAxios = axios.create({
  baseURL: '/v1/api',
});

appAxios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const { auth } = store.getState();
    config.headers["Authorization"] = "Bearer " + auth.token;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
/**
 * For handling 401: Unauthorization
 */
appAxios.interceptors.response.use(
  function (response) {
    if (response.status === 201) {
      alert("Изменения сохранены!");
    }
    return response;
  },
  function (error) {
    console.log("error.response.status: ", error);
    if (error.response.status === 401) {
      store.dispatch(logoutAction());
      window.location = "/auth/login";
    } else if (error.response.status === 201) {
      alert("Изменения сохранены!");
    } else {
      console.error("http ex: ");
      alert(error.response?.data?.message || error.response.statusText);
      return Promise.reject(error);
    }
  }
);

export default appAxios;
