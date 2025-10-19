import { UserApiInstance } from "../api/UserApi";

class UserService {
  async createAdminUser({ ...params }) {
    const result = await UserApiInstance.createAdminUser({ ...params });
    return result;
  }

  async getAllPermissions({ ...params }) {
    const result = await UserApiInstance.getAllPermissions({ ...params });
    return result;
  }

  async getAllAdmins({ ...params }) {
    const result = await UserApiInstance.getAllAdmins({ ...params });
    return result;
  }

  async getAdminPermissionsById({ ...params }) {
    const result = await UserApiInstance.getAdminPermissionsById({ ...params });
    return result;
  }

  async updateAdminPermissions({ ...params }) {
    const result = await UserApiInstance.updateAdminPermissions({ ...params });
    return result;
  }

  async getAdminInfo({ ...params }) {
    const result = await UserApiInstance.getAdminInfo({ ...params });
    return result;
  }

  async updateAdminInfo({ ...params }) {
    const result = await UserApiInstance.updateAdminInfo({ ...params });
    return result;
  }

  async updateAdminStatus({ ...params }) {
    const result = await UserApiInstance.updateAdminStatus({ ...params });
    return result;
  }

  async updateAdminProfileImage(params: FormData) {
    const result = await UserApiInstance.updateAdminProfileImage(params);
    return result;
  }

  async deleteUser({ ...params }) {
    const result = await UserApiInstance.deleteUser({ ...params });
    return result;
  }

}

const UserServiceInstance = new UserService();
export { UserService, UserServiceInstance };
