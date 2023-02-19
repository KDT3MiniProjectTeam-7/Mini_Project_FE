import styled from 'styled-components';
import { Link as LinkForm } from 'react-router-dom';

const Intro = () => {
  return (
    <MainContainer>
      <Logo />
      <Link to={'/login'}>로그인</Link>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: 0;
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
  background-color: var(--main-color);
  height: var(--input-height);
  font-size: var(--font-m);
  color: #ffffff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-decoration: none;
`;

export default Intro;
