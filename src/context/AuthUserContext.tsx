import { createContext, useContext, useState } from "react";
import { getAccessToken, getCurrentUserInfo } from "@/helpers/authHelper";

const AuthUserContext = createContext<any>({});

export default function AuthUserProvider({ children }: any) {
  const [authUser, setAuthUser] = useState<any>(getCurrentUserInfo());

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
}

export function useAuthUserContext() {
  return useContext(AuthUserContext);
}
