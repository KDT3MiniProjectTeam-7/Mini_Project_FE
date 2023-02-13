import styled from 'styled-components';
import { Container } from '../intro/Intro';
import { LoginBox as BoxForm, Input, Submit } from '../login/Login';

const SignUp = () => {
  const signUpItem = [
    {
      id: 'email',
      title: '이메일',
      type: 'email',
    },
    {
      id: 'password',
      title: '비밀번호',
      type: 'password',
    },
    {
      id: 'passwordCheck',
      title: '비밀번호 확인',
      type: 'password',
    },
    {
      id: 'name',
      title: '이름',
      type: 'text',
    },
    {
      id: 'birth',
      title: '생년월일',
      type: 'date',
    },
  ];

  return (
    <main>
      <Container>
        <SignUpBox>
          {signUpItem.map((item) => {
            return (
              <DataContainer>
                <label htmlFor={item.id}>{item.title}</label>
                <Input type={item.type} id={item.id} />
              </DataContainer>
            );
          })}
          <Submit type="submit" value="가입하기" />
        </SignUpBox>
      </Container>
    </main>
  );
};

const SignUpBox = styled(BoxForm)`
  height: 100%;
  label {
    font-size: 18px;
  }
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default SignUp;
