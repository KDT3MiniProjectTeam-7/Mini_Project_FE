import { Link as LinkForm } from 'react-router-dom';
import styled from 'styled-components';

const Intro = () => {
  return (
    <main>
      <Container>
        <Logo />
        <Link to={'/login'}>로그인</Link>
        <Link to={'/signup'}>회원가입</Link>
      </Container>
    </main>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Logo = styled.img.attrs({
  src: 'https://compphoto.incruit.com/2021/12/FCCI2.png',
  alt: '로고 이미지',
})`
  width: 100%;
  max-width: 400px;
`;

const Link = styled(LinkForm)`
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 50px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  :hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1);
  }

  :visited {
    color: black;
  }
`;

export default Intro;
export { Container, Logo, Link };
