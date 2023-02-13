import styled from 'styled-components';
import { Container, Logo as LogoForm } from '../intro/Intro';

const Login = () => {
  return (
    <main>
      <Container>
        <Logo />
        <LoginBox>
          <Input type="email" />
          <Input type="password" />
          <Submit type="submit" value="로그인" />
        </LoginBox>
        <SignUp>회원가입</SignUp>
      </Container>
    </main>
  );
};

const Logo = styled(LogoForm).attrs({
  src: 'https://blog.kakaocdn.net/dn/d0l1Pv/btqGmONiPmW/OluDzrKeEx79dtll0GFVik/img.png',
})``;

const LoginBox = styled.form`
  width: 100%;
  max-width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding-left: 12px;
  border-radius: 8px;
  border: none;
  background-color: #e8f0fe;

  :focus {
    outline: none;
  }
`;

const Submit = styled(Input)`
  width: calc(100% - 100px);
  background-color: whitesmoke;
  height: 40px;
  font-weight: bold;
`;

const SignUp = styled.button`
  border: none;
  background-color: white;
`;

export default Login;
