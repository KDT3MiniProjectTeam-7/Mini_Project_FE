import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsPiggyBank } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

import styled from 'styled-components';

const TabBar = () => {
  const [btnColor, setBtnColor] = useState<number>(0);
  const tabArr = [
    { path: '/', icon: <AiOutlineHome />, title: '홈' },
    { path: '/all', icon: <BsPiggyBank />, title: '금융상품' },
    { path: '/search', icon: <FiSearch />, title: '검색' },
    { path: '/mypage', icon: <AiOutlineUser />, title: '마이페이지' },
  ];

  const handleTabBtn = (index: number) => {
    setBtnColor(index);
  };

  return (
    <>
      <Container>
        {tabArr.map((list, index) => (
          <StyledLink to={list.path} key={list.path} onClick={() => handleTabBtn(index)}>
            <span className={'icon' + (index === btnColor ? ' clicked' : '')}>{list.icon}</span>
            <span className={index === btnColor ? 'clicked' : ''}>{list.title}</span>
          </StyledLink>
        ))}
      </Container>
    </>
  );
};

const Container = styled.nav`
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 56px;
  padding: 8px 20px 12px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: #fff;
  box-shadow: 0px 0px 23px 0px rgb(0 0 0 /20%);
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 66px;
  padding: 4px 0;

  span {
    margin-top: 3px;
    color: #535a60;
    font-size: 12px;
    line-height: 1.33333;
  }

  .icon {
    height: 24px;
    font-size: 24px;
  }

  .clicked {
    color: #0e76ff;
  }
`;

export default TabBar;
