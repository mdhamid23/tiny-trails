import { jwtDecode } from "jwt-decode";

export const bearerToken = () => {
  try {
    return JSON.parse(localStorage.getItem("logged_in_info")!)
      ? JSON.parse(localStorage.getItem("logged_in_info")!).access_token
      : null;
  } catch (err) {
    return null;
  }
};

export const refreshToken = () => {
  try {
    return JSON.parse(localStorage.getItem("logged_in_info")!)
      ? JSON.parse(localStorage.getItem("logged_in_info")!).refresh_token
      : null;
  } catch (err) {
    return "";
  }
};

export const login = (data: object) => {
  try {
    localStorage.setItem("logged_in_info", JSON.stringify(data));
  } catch (err) {
    console.log("Error in login", err);
  }
};

export const logout = () => {
  localStorage.removeItem("logged_in_info");
};

export const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem("logged_in_info")!);
  if (token) {
    return token.access_token;
  } else {
    return null;
  }
};

export const getCurrentUserInfo = () => {
  try {
    const info = JSON.parse(localStorage.getItem("logged_in_info")!);
    const decodedJwt = jwtDecode(info.access_token);
    return decodedJwt;
  } catch (err) {
    return null;
  }
};

export const isPermitted = (permission: string) => {
  const user = JSON.parse(localStorage.getItem("logged_in_info")!);
  if (user) {
    const userPermission = user?.permissions?.find(
      (p: any) => p.permission_name === permission
    );
    // console.log(userPermission);
    if (userPermission && userPermission?.is_active) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// export const getCurrentUser = () => {
//   try {
//     const info = JSON.parse(localStorage.getItem("logged_in_info")!);
//     // @ts-ignore
//     const decodedJwt = jwt_decode(info.access_token);
//     return decodedJwt;
//   } catch (err) {
//     return null;
//   }
// };

// export const getCurrentUserId = () => {
//   const user = getCurrentUser();
//   if (user) return user.user_id;
//   else return null;
// };

// export const isLoggedIn = () => {
//   const logged_in_info = JSON.parse(localStorage.getItem("logged_in_info")!);
//   if (logged_in_info) {
//     //&& isValidSession()
//     return true;
//   } else {
//     return false;
//   }
// };

// export const isValidSession = () => {
//   const logged_in_info = JSON.parse(localStorage.getItem("logged_in_info")!);
//   if (logged_in_info) {
//     // @ts-ignore
//     const decodedJwt = jwt_decode<AccessToken>(logged_in_info.access_token);
//     if (decodedJwt.exp * 1000 < Date.now()) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

// export const getCurrentUserRole = () => {
//   const logged_in_info = JSON.parse(localStorage.getItem("logged_in_info")!);
//   if (logged_in_info) {
//     // @ts-ignore
//     const decodedJwt = jwt_decode<AccessToken>(logged_in_info.access_token);
//     // console.log(decodedJwt.roles);
//     return decodedJwt.roles;
//   } else {
//     return null;
//   }
// };
