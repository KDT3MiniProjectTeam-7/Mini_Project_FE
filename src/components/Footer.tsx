import { Link } from 'react-router-dom';
import { FaHome, FaThLarge, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useState } from 'react';

const Footer = () => {
  // 0,1,2로 스테이트 관리
  const [gnbNum, setGnbNum] = useState([true, false, false]);

  return (
    <>
      <FooterComponent>
        <StlyedLink to={'/'} onClick={() => setGnbNum([true, false, false])}>
          <FaHome size="25" color={gnbNum[0] ? 'rgb(14, 118, 255)' : '#ddd'} />
          <Paragraph>홈</Paragraph>
        </StlyedLink>
        <StlyedLink to={'/all'} onClick={() => setGnbNum([false, true, false])}>
          <FaThLarge size="23" color={gnbNum[1] ? 'rgb(14, 118, 255)' : '#ddd'} />
          <Paragraph>모아보기</Paragraph>
        </StlyedLink>
        <StlyedLink to={'/search'} onClick={() => setGnbNum([false, false, true])}>
          <FaSearch size="24" color={gnbNum[2] ? 'rgb(14, 118, 255)' : '#ddd'} />
          <Paragraph>검색 결과</Paragraph>
        </StlyedLink>
      </FooterComponent>
    </>
  );
};

const FooterComponent = styled.footer`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 23px 0px rgb(0 0 0 /20%);
  padding: 0;
  height: 80px;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StlyedLink = styled(Link)`
  width: 120px;
  color: #000000;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paragraph = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;

export default Footer;
