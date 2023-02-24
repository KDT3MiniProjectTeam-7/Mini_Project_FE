import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Item } from '../store/cartSlice';
import { ReducerType } from '../store/store';
import logo from '../assets/financeSeven.png';

const Header = () => {
  const cartItems = useSelector<ReducerType, Item[]>((state) => state.cart);

  return (
    <>
      <HeaderComponents>
        <Logo to={'/'}>
          <img src={logo} alt="Finance seven Logo" />
        </Logo>
        <StyledLink to={'/cart'}>
          <AiOutlineHeart size="24" color="#424242" className="wish" />
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

  img {
    height: 40px;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;

  .wish {
    transition: all 0.3s ease-in-out;
    &:active {
      scale: 0.95;
    }
  }
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
