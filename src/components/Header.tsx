import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Item } from '../store/cartSlice';
import { ReducerType } from '../store/store';

const Header = () => {
  const cartItems = useSelector<ReducerType, Item[]>((state) => state.cart);

  const titleArr = [
    { path: '/', title: '파이낸스세븐' },
    { path: '/all', title: '금융상품' },
    { path: '/search', title: '검색' },
    { path: '/mypage', title: '마이페이지' },
  ];

  return (
    <>
      <HeaderComponents>
        <Logo to={'/'}>파이낸스세븐</Logo>
        <StyledLink to={'/cart'}>
          <AiOutlineHeart size="24" color="#424242" />
          <WishLength>{cartItems.length}</WishLength>
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

const Logo = styled(Link)`
  color: var(--main-color);
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
  background-color: var(--red-color);

  color: #fff;
  font-size: 8px;
  font-weight: 700;
`;

export default Header;
