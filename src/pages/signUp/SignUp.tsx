import { useState } from 'react';
import styled from 'styled-components';
import Agreement from './Agreement';
import Complete from './Complete';
import UserInformation from './UserInformation';

const SignUp = () => {
  const [page, setPage] = useState('Complete');

  return (
    <MainContainer>
      {
        // (page === 'Agreement' && <Agreement setPage={setPage} />) ||
        //   (page === 'UserInformation' && <UserInformation setPage={setPage} />) ||
        page === 'Complete' && <Complete />
      }
    </MainContainer>
  );
};

const MainContainer = styled.main`
  margin: 0;
  padding: 0;
  position: relative;
`;

const Title = styled.h1`
  height: 70px;
  font-size: var(--font-xxl);
  font-weight: bold;
  /* border-bottom: 1px solid var(--gray-color); */
`;

export default SignUp;
