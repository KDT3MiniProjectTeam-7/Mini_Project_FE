import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LinkForm = styled(Link)`
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 50px;
  border-radius: 20px;
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

const LogoForm = styled.img.attrs({
  alt: '로고 이미지',
})`
  width: 100%;
  max-width: 400px;
`;

const InputForm = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  background-color: #e8f0fe;

  :focus {
    outline: none;
  }
`;

const BoxForm = styled.form`
  width: 100%;
  max-width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export { LinkForm, Container, LogoForm, InputForm, BoxForm };
