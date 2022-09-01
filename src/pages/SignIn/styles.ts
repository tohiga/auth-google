import styled from "styled-components";

export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
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
  height: 56px;
  width: 650px;

  background: none;
  border-image: linear-gradient(to right, var(--text), var(--background)) 1;
  border-radius: 10px;
  color: var(--text);
  margin-top: 30px;
`;
