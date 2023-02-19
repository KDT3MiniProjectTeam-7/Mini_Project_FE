import styled from 'styled-components';
import { Link as LinkForm } from 'react-router-dom';

const Intro = () => {
  return (
    <main>
      <Logo />
      <Link to={'/login'}>로그인</Link>
      <Link to={'/signup'}>회원가입</Link>
    </main>
  );
};

const Logo = styled.img.attrs({
  src: 'https://compphoto.incruit.com/2021/12/FCCI2.png',
  alt: '로고 이미지',
})`
  width: 100%;
  max-width: 400px;
`;

const Link = styled(LinkForm)`
  width: 100%;
  background-color: var(--lightgray-color);
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--input-height);
  font-size: var(--font-m);
  font-weight: bold;
  text-decoration: none;
  border-radius: 20px;
  margin: 10px 0;

  :visited {
    color: var(--black-color);
  }
`;

export default Intro;
