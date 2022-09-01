import { useAuth } from "contexts/Auth";
import { Navigate } from "react-router-dom";

export { PrivateRoute };

function PrivateRoute({ children }: React.PropsWithChildren<any>) {
  const { isLogged } = useAuth();

  return isLogged ? children : <Navigate to="/" />;
}
