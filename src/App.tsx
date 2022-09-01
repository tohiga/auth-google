import { AuthProvider, useAuth } from "contexts/Auth";
import { GlobalStyle } from "GlobalStyles";
import { Home } from "pages/Home";
import { SignIn } from "pages/SignIn";
import { PrivateRoute } from "PrivateRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const { isLogged, user } = useAuth();
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
