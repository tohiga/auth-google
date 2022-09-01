import * as S from "./styles";
import { useAuth } from "contexts/Auth";
import { IcGoogle } from "assets";

export const SignIn = () => {
  const { handleSignIn } = useAuth();

  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <S.Button onClick={() => handleSignIn()}>
        <S.Icon src={IcGoogle} />
        <S.ButtonText>Sign in with Google</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};
