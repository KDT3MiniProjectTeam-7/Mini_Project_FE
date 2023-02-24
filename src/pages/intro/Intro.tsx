import styled from 'styled-components';
import { Link as LinkForm } from 'react-router-dom';
import logo from '../../assets/logo_transparent.png';

const Intro = () => {
  return (
    <MainContainer>
      <Logo src={logo} />
      <Link to={'/login'}>로그인</Link>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  gap: 20px;
`;

const Logo = styled.img.attrs({
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
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-decoration: none;
  border-radius: 20px;
`;

export default Intro;
