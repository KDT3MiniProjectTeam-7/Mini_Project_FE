import styled from 'styled-components';
import { Container, LinkForm as Link, LogoForm } from '../../common/style/style';

const Intro = () => {
  return (
    <Container>
      <Logo />
      <Link to={'/login'}>로그인</Link>
      <Link to={'/signup'}>회원가입</Link>
    </Container>
  );
};

const Logo = styled(LogoForm).attrs({
  src: 'https://compphoto.incruit.com/2021/12/FCCI2.png',
})``;

export default Intro;
