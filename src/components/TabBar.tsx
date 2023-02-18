import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsPiggyBank } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const TabBar = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState<string>('/');

  useEffect(() => {
    setPathname(location.pathname);
    console.log('링크 바뀜');
  }, [location.pathname]);

  const tabArr = [
    { isTabBtn: true, path: '/', icon: <AiOutlineHome />, title: '홈' },
    { isTabBtn: true, path: '/all', icon: <BsPiggyBank />, title: '금융상품' },
    { isTabBtn: true, path: '/search', icon: <FiSearch />, title: '검색' },
    { isTabBtn: true, path: '/mypage', icon: <AiOutlineUser />, title: '마이페이지' },
  ];

  return (
    <>
      <Container>
        {tabArr.map((list, index) => (
          <StyledLink to={list.path} key={list.path}>
            <span className={'icon' + (list.path === pathname ? ' clicked' : '')}>{list.icon}</span>
            <span className={list.path === pathname ? 'clicked' : ''}>{list.title}</span>
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
