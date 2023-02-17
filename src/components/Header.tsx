import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

const Header = () => {
  const location = useLocation();
  const [wish, setWish] = useState<number>(12);
  const wishLenght = () => {
    setWish(1);
  };

  const titleArr = [
    // 메인만 파란색 글씨 파이낸스세븐, 그 외에는 검정색 타이틀
    // 타입스크립트 에러나서 하다가 말음
    { path: '/', title: '파이낸스세븐' },
    { path: '/all', title: '금융상품' },
    { path: '/search', title: '검색' },
    { path: '/mypage', title: '마이페이지' },
  ];

  return (
    <>
      <HeaderComponents>
        <Logo>파이낸스세븐</Logo>
        <StyledLink to={'/cart'}>
          <AiOutlineHeart size="24" color="#424242" />
          <WishLength>{wish}</WishLength>
        </StyledLink>
      </HeaderComponents>
    </>
  );
};

const HeaderComponents = styled.header`
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 56px;
  padding: 13px 16px;

  background-color: #fff;
`;

const Logo = styled.div`
  color: #0e76ff;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  position: relative;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WishLength = styled.span`
  position: absolute;
  top: -8px;
  right: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #ff4545;

  color: #fff;
  font-size: 8px;
  font-weight: 700;
`;

export default Header;
