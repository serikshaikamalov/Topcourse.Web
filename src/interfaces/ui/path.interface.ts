export interface IRoute {
  path: string;
  element?: any;
  redirect?: string;
  children?: IRoute[];
}
