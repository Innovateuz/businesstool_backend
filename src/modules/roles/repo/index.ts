import { TCreateRole, TGetRoleById } from "./types";
import Role from "../../../database/models/Role";

class RolesRepo {
  async getRoleById(data: TGetRoleById) {
    try {
      const { roleId } = data;

      return await Role.findOne({ _id: roleId, isDeleted: false });
    } catch (error: any) {
      console.error(`ERROR: [roles.repo] getRoleById: ${error}`);
      throw error;
    }
  }

  async getRoles() {
    try {
      return await Role.find({ isDeleted: false });
    } catch (error: any) {
      console.error(`ERROR: [roles.repo] getRoles: ${error}`);
      throw error;
    }
  }

  async createRole(data: TCreateRole) {
    try {
      const { name } = data;

      const newRole = new Role({
        name,
      });

      await newRole.save();

      return newRole;
    } catch (error: any) {
      console.error(`ERROR: [roles.repo] createRole: ${error}`);
      throw error;
    }
  }
}

export default RolesRepo;
