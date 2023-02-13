import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderComponents>
        <StlyedLink to={'/wish'}>
          <AiFillHeart size="24" color="green" />
        </StlyedLink>
        <StlyedLink to={'/all'}>
          <FaUserAlt size="24" color="green" />
        </StlyedLink>
      </HeaderComponents>
    </>
  );
};

const HeaderComponents = styled.header`
  background-color: #d7d5d5;
  padding: 0;
  position: fixed;
  height: 70px;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StlyedLink = styled(Link)`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Header;
