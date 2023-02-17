import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Container, LogoForm, InputForm as Input, LinkForm as Link, BoxForm, Caution } from '../../common/style/Style';
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
            <Caution>Email을 입력해주세요.</Caution>
          ) : errors.email && errors.email?.type === 'pattern' ? (
            <Caution>Email을 정확히 입력해주세요.</Caution>
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
                value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,5}$/i,
                message: 'Email을 정확히 입력해주세요.',
              },
            })}
          />
          {errors.password && <Caution>비밀번호를 입력해주세요.</Caution>}
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
