import styled from 'styled-components';

const Intro = () => {
  return (
    <main>
      <Container>
        <Logo />
        <Button>로그인</Button>
        <Button>회원가입</Button>
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

const Button = styled.button`
  background-color: whitesmoke;
  width: 100%;
  max-width: 400px;
  height: 40px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;

  :hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1);
  }
`;

export default Intro;
export { Container, Logo, Button };
