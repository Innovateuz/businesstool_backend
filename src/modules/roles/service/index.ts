import { fail, ok } from "../../../utils/response";
import { TGetRoleById } from "./types";
import RolesRepo from "../repo/index";
import { TCreateRole } from "./types";

const repo = new RolesRepo();

class RolesService {
  async getByRoleId(data: TGetRoleById) {
    try {
      const { roleId } = data;

      return await repo.getRoleById({ roleId });
    } catch (error: any) {
      console.error(`ERROR: [roles.service] getByRoleId: ${error}`);
      throw error;
    }
  }

  async getRoles() {
    try {
      const roles = await repo.getRoles();

      return ok(roles);
    } catch (error: any) {
      console.error(`ERROR: [roles.service] getRoles: ${error}`);
      return fail(500, error);
    }
  }

  async createRole(data: TCreateRole) {
    try {
      const { name } = data;

      const newRole = await repo.createRole({ name });

      return ok(newRole);
    } catch (error: any) {
      console.error(`ERROR: [roles.service] createRole: ${error}`);
      return fail(500, error);
    }
  }
}

export default new RolesService();
