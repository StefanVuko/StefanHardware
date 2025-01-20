interface IAuthContext {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

import { createContext, SetStateAction, Dispatch } from "react";

export const AuthContext = createContext<IAuthContext>({
  username: "",
  setUsername: () => {},
});
