import { Link } from 'react-router-dom';
import { FaHome, FaThLarge, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <StlyedLink to={'/'}>
          <FaHome size="24" color="green" />
          <Paragraph>홈</Paragraph>
        </StlyedLink>
        <StlyedLink to={'/all'}>
          <FaThLarge size="24" color="green" />
          <Paragraph>상품 모아보기</Paragraph>
        </StlyedLink>
        <StlyedLink to={'/search'}>
          <FaSearch size="24" color="green" />
          <Paragraph>검색 결과</Paragraph>
        </StlyedLink>
      </FooterComponent>
    </>
  );
};

const FooterComponent = styled.footer`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #d7d5d5;
  padding: 0;
  height: 100px;
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
  margin-top: 8px;
`;

export default Footer;
