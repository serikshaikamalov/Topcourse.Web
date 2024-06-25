import { IPost } from "interfaces/entities/post.interface";
import { BaseService } from "./_baseService";

class PostService extends BaseService<IPost> {
  constructor() {
    super("/posts");
  }
}

export default new PostService();
