import { useState } from 'react';
import styled from 'styled-components';
import Agreement from './Agreement';
import UserInformation from './UserInformation';

const SignUp = () => {
  const [page, setPage] = useState('Agreement');

  return (
    <main>
      <Title>회원가입</Title>
      {(page === 'Agreement' && <Agreement setPage={setPage} />) ||
        (page === 'UserInformation' && <UserInformation setPage={setPage} />)}
    </main>
  );
};

const Title = styled.h1`
  height: 70px;
  font-size: var(--font-xxl);
  font-weight: bold;
  /* border-bottom: 1px solid var(--gray-color); */
`;

export default SignUp;
