import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link as LinkForm } from 'react-router-dom';

interface InputFormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormData>();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    // 여기서 api 호출, data 사용

    // 성공시
    navigate('/');
    // 실패시
    // 실패 안내
  };

  return (
    <MainContainer>
      <Logo />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          type="text"
          placeholder="Email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,5}$/i,
              message: 'Email을 정확히 입력해주세요.',
            },
          })}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: true,
          })}
        />
        {errors.email || errors.password ? (
          <Caution>
            Email 혹은 비밀번호가 일치하지 않습니다.
            <br />
            입력한 내용을 다시 확인해주세요.
          </Caution>
        ) : (
          <Caution />
        )}
        <Submit type="submit" value="로그인" />
        <Link to={'/signup'}>회원가입</Link>
      </Form>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  gap: 20px;
`;

const Logo = styled.img.attrs({
  src: 'https://blog.kakaocdn.net/dn/d0l1Pv/btqGmONiPmW/OluDzrKeEx79dtll0GFVik/img.png',
  alt: '로고 이미지',
})`
  width: 100%;
  max-width: 400px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  height: var(--input-height);
  font-size: var(--font-m);
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid var(--lightblue-color);

  :focus {
    outline: none;
    border-bottom: 2px solid var(--main-color);
  }
`;

const Caution = styled.small`
  height: 28px;
  line-height: 116%;
  font-size: var(--font-xs);
  color: var(--red-color);
  margin: -10px 0;
`;

const Submit = styled(Input)`
  background-color: var(--main-color);
  height: var(--input-height);
  font-size: var(--font-m);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  font-weight: bold;
`;

const Link = styled(LinkForm)`
  font-size: var(--font-m);
  display: flex;
  align-items: center;
  justify-content: center;
  :visited {
    color: var(--black-color);
  }
`;

export default Login;
