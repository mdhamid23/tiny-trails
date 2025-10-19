import { getAxios } from "../../../config/axios-config";

class UserApi {
  async createAdminUser({ ...params }) {
    try {
      const response = await getAxios({
        url: `/users/admin`,
        method: "POST",
        data: params,
      });
      return response;
    } catch (err) {
      throw err;
    }
  }

  async getAllPermissions({ ...params }) {
    try {
      const response = await getAxios({
        url: `/permissions`,
        method: "GET",
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async getAllAdmins({ ...params }) {
    try {
      const response = await getAxios({
        url: `/users/all?user_type=ADMIN`,
        method: "GET",
      });
      console.log(response);
      return response;
    } catch (e) {
      throw e;
    }
  }

  async getAdminPermissionsById({ ...params }) {
    try {
      const response = await getAxios({
        url: `/user-permissions`,
        method: "GET",
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async updateAdminPermissions({ ...params }) {
    try {
      const response = await getAxios({
        url: `/user-permissions`,
        method: "PATCH",
        data: params,
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async getAdminInfo({ ...params }) {
    try {
      const response = await getAxios({
        url: `/user-permissions`,
        method: "GET",
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async updateAdminInfo({ ...params }) {
    try {
      const response = await getAxios({
        url: `/users`,
        method: "PATCH",
        data: params,
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async updateAdminStatus({ ...params }) {
    try {
      const response = await getAxios({
        url: `/users/status/${params.user_id}/${params.is_active}`,
        method: "PATCH",
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async updateAdminProfileImage(params: FormData) {
    console.log(params?.get("file"));
    try {
      const response = await getAxios({
        url: `/users/picture`,
        method: "PATCH",
        data: params,
      });
      return response;
    } catch (e) {
      throw e;
    }
  }

  async deleteUser({ ...params }) {
    try {
      const response = await getAxios({
        url: `/users/${params.id}`,
        method: "DELETE",
        data: params,
      });
      return response;
    } catch (e) {
      throw e;
    }
  }
}

const UserApiInstance = new UserApi();
export { UserApi, UserApiInstance };
