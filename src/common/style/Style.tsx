import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 100;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype');}
  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 300;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');}
  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');}
  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 500;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype');}
  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 700;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');}
  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 900;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype');}

  :root {
    --main-color : #0e76ff;
    --lightblue-color : #e0ebfb;
    --black-color : #111111;
    --gray-color : #666666;
    --lightgray-color : #f4f4f4;
    --red-color: #ff4545;
    --font-xs : 12px; 
    --font-s: 14px;  
    --font-m: 16px;  // 본문
    --font-l: 18px;  // li 타이틀 (ex 연회비)
    --font-xl: 20px;  // 부제목
    --font-xxl: 22px;  // 제목
    --input-height: 40px;
  }

  * {
    box-sizing:border-box;
    font-family: 'Noto Sans KR', sans-serif !important;
  }

  main, header, nav {
    max-width:768px;
    padding:0 20px;
    box-sizing: border-box;
    margin:0 auto;
  }

  header, nav {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9999;
  }

  main {
    margin:70px auto 60px
  }

  a {
    text-decoration: none;
    color: #000;
  }

  li { 
    list-style: none; 
  }
`;


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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Caution = styled.small`
  font-size: 10px;
  color: red;
`;


export { LinkForm, Container, LogoForm, InputForm, BoxForm, Caution };
