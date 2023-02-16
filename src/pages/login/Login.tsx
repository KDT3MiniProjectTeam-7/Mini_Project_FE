import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Container, LogoForm, InputForm as Input, LinkForm as Link, BoxForm } from '../../common/style/style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    // 여기서 api 호출, data 사용

    // 성공시
    navigate('/');
    // 실패시
    // 실패 안내
  };

  return (
    <main>
      <Container>
        <Logo />
        <BoxForm onSubmit={handleSubmit(onSubmit)}>
          {errors.email && errors.email?.type === 'required' ? (
            <small>Email을 입력해주세요.</small>
          ) : errors.email && errors.email?.type === 'pattern' ? (
            <small>Email 형식으로 입력해주세요.</small>
          ) : (
            <></>
          )}
          <Input
            id="email"
            type="text"
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Email 형식에 맞지 않습니다.',
              },
            })}
          />
          {errors.password && <small>비밀번호를 입력해주세요.</small>}
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...register('password', {
              required: true,
            })}
          />
          <Submit type="submit" value="로그인" />
        </BoxForm>
        <Link to={'/signup'}>회원가입</Link>
      </Container>
    </main>
  );
};

const Logo = styled(LogoForm).attrs({
  src: 'https://blog.kakaocdn.net/dn/d0l1Pv/btqGmONiPmW/OluDzrKeEx79dtll0GFVik/img.png',
})``;

export const Submit = styled(Input)`
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 50px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  :hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1);
  }

  :visited {
    color: black;
  }
`;

export default Login;
