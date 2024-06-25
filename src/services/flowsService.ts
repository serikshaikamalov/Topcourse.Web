import { BaseService } from "./_baseService";
import { IFlow } from "interfaces/entities/flow.interface";

class FlowsService extends BaseService<IFlow> {
  constructor() {
    super("/admin/flows");
  }
}

export default new FlowsService();
