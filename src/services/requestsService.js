import appAxios from "./axios";

class RequestsService {
  async post({ name, email, phone }) {
    return appAxios.post("/request", {
      name,
      email,
      phone,
    });
  }
}

export default RequestsService;
