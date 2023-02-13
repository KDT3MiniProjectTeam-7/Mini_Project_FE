import styled from 'styled-components';
import { Container, Link, Logo as LogoForm } from '../intro/Intro';
import { Link as LinkForm } from 'react-router-dom';

const Login = () => {
  return (
    <main>
      <Container>
        <Logo />
        <LoginBox>
          <Input type="email" />
          <Input type="password" />
          <Link to={'/'}>
            <Submit type="submit" value="로그인" />
          </Link>
        </LoginBox>
        <LinkSignUp to={'/signup'}>회원가입</LinkSignUp>
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
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: #e8f0fe;

  :focus {
    outline: none;
  }
`;

const Submit = styled(Input)`
  background-color: whitesmoke;
  font-weight: bold;
`;

const LinkSignUp = styled(LinkForm)`
  border: none;
  text-decoration: none;
  :visited {
    color: black;
  }
`;

export default Login;
export { LoginBox, Input, Submit };
