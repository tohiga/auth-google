import * as S from "./styles";
import { useAuth } from "contexts/Auth";

export const Home = () => {
  const { user } = useAuth();

  return (
    <S.Container>
      <S.ProfilePic src={user?.photoURL || ""} alt="User picture" />
      <S.Text>{user?.displayName}</S.Text>
      <S.Text>{user?.email}</S.Text>
    </S.Container>
  );
};
