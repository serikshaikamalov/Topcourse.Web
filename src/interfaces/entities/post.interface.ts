import { IUser } from "./user.interface";
import { statusEnum } from "enums/statusEnum";

export interface IPost {
  id: number;
  name: string;
  text: string;
  previewText: string;
  author: IUser;
  status: statusEnum | string;
  image?: string;
  createdAt?: string;
  mainImage?: string;
}
