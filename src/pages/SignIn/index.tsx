import * as S from "./styles";
import { useAuth } from "contexts/Auth";

export const SignIn = () => {
  const { isLogged, handleSignIn, user } = useAuth();

  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <S.Button onClick={() => handleSignIn()}>Entrar</S.Button>
    </S.Container>
  );
};
