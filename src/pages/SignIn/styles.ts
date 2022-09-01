import styled from "styled-components";

export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonText = styled.span`
  font-size: 16px;
  background: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 40%;
  min-width: 250px;

  border: none;
  background: linear-gradient(0.2turn, var(--purple) 15%, var(--blue));
  border-radius: 10px;
  color: var(--text);
  margin-top: 30px;

  @media (max-width: 800px) {
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const Icon = styled.img`
  width: 22px;
  height: 22px;
  background: transparent;
  margin-right: 10px;
`;
