import appAxios from "./axios";
/*
    For CRUD
*/
export class AuthService {
  static createUser(data) {
    return appAxios.post("/auth/signup", data);
  }

  static login(user) {
    return appAxios.post("/auth/login", user);
  }

  static signInWithGoogle(user, accessToken) {
    return appAxios.post("/auth/google", {
      user,
      accessToken,
    });
  }
}
