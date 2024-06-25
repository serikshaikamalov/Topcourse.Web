import { toQueryParams } from "helpers/url";
import appAxios from "./axios";

export class BaseService<T> {
  constructor(public basePath: string) {}

  getAll = (queryParams: object): Promise<T[]> =>
    appAxios.get(this.basePath + "?" + toQueryParams(queryParams));
  get = (id: number): Promise<T> => appAxios.get(`${this.basePath}/${id}`);
  delete = (id: number): Promise<number> =>
    appAxios.delete(`${this.basePath}/${id}`);
  post = (data: number): Promise<T> =>
    appAxios.post(`${this.basePath}/add`, data);
  put = (id: number, data: T): Promise<T> =>
    appAxios.put(`${this.basePath}/${id}`, data);
  patch = (id: number, data: T): Promise<T> =>
    appAxios.patch(`${this.basePath}/${id}`, data);
}
