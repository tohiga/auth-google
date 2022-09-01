import { useState, createContext, useCallback, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "services/firebase";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export type AuthContextData = {
  user: User | undefined;
  isLogged: boolean;
  handleSignIn: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [user, setUser] = useState<User>();

  const isLogged = Boolean(user);

  let navigate = useNavigate();

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ isLogged, user, handleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useChat must be uses whithin a AuthProvider");
  }

  return context;
}
