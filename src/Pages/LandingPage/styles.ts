import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 93vh;
`;

const appearFromtop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  animation: ${appearFromtop} 1s;
`;

export const Title = styled.div`
  width: 75vw;
  display: flex;
  justify-content: center;
  margin: 4% auto 0 auto;

  font-size: 42px;
  color: #fb3052;
  align-items: center;
`;

export const Products = styled.div`
  height: 65vh;
  width: 75vw;
  padding: 5%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Register = styled.div`
  width: 75vw;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.div`
  margin: 5% auto;
  width: 75vw;
  display: flex;
  justify-content: center;

  input {
    padding: 1% 4%;
    margin-right: 1%;

    border: solid 1px #fb3052;
    border-radius: 8px;
    color: #fb3052;
    background: transparent;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &::placeholder {
      color: #fb3052;
      font-size: 16px;
    }
  }

    button {
      padding: 1% 2%;

      border-radius: 8px;
      background: #fb3052;
      color: #fff;
      border: 0;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

      &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      color: #3a2d32;
      }
    }
      button + button {
        margin-left: 1%;
      }
`;

export const Footer = styled.footer`
  background: #fb3052;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextFooter = styled.div`
  color: #fff;
  padding: 0.5%;
`;
