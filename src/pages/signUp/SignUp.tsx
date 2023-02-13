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
    // {
    //   id: 'birth',
    //   title: '생년월일',
    //   type: 'date',
    // },
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
          <DataContainer>
            <label>생년월일</label>
            <div className="birth">
              <Input type="number" placeholder="년(4자)" min="1900" max="2023" />
              <Input type="number" placeholder="월" min="1" max="12" />
              <Input type="number" placeholder="일" min="1" max="31" />
            </div>
          </DataContainer>
          <Submit type="submit" value="가입하기" />
        </SignUpBox>
      </Container>
    </main>
  );
};

const SignUpBox = styled(BoxForm)`
  label {
    font-size: 18px;
  }
  .birth {
    display: flex;
    justify-content: space-between;
    input {
      width: 31%;
    }
  }
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default SignUp;
