import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/Bi';
import styled from 'styled-components';

const SearchHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <BackBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          <BiArrowBack size="24" color="green" />
        </BackBtn>
        <Title>탐색</Title>
      </Header>
    </>
  );
};

const Header = styled.header`
  background-color: #d7d5d5;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
`;

const BackBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
const Title = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
`;

export default SearchHeader;
