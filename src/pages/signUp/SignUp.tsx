import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BoxForm, Container, LinkForm as Link, InputForm as Input, Caution } from '../../common/style/Style';
import { Submit } from '../login/Login';
import { useRef, useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const birth = [
    { date: 'birthYear', placeholder: '년도', min: 1900, max: new Date().getFullYear() },
    { date: 'birthMonth', placeholder: '월', min: 1, max: 12 },
    { date: 'birthDay', placeholder: '일', min: 1, max: 31 },
  ];

  const validation = {
    email: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,5}$/i,
    name: /^[가-힣]+$/,
  };

  const password = useRef();
  password.current = watch('password');

  const [emailValue, setEmailValue] = useState({ error: '', message: '' });
  const [passwordValue, setPasswordValue] = useState({ error: '', message: '' });
  const [passwordConfirmValue, setPasswordConfirmValue] = useState({ error: '', message: '' });
  const [nameValue, setNameValue] = useState({ error: '', message: '' });
  const [birthValue, setBirthValue] = useState({ error: '', message: '' });

  const onBlurEmail = () => {
    !watch('email')
      ? setEmailValue({ error: 'empty', message: '필수 입력 항목입니다.' })
      : !validation.email.test(watch('email'))
      ? setEmailValue({ error: 'pattern', message: 'Email을 정확히 입력해주세요.' })
      : setEmailValue({ error: '', message: '' });
  };

  const onBlurPassword = () => {
    !watch('password')
      ? setPasswordValue({ error: 'empty', message: '필수 입력 항목입니다.' })
      : !(watch('password').length >= 8 && watch('password').length <= 20)
      ? setPasswordValue({ error: 'length', message: '8자 이상, 20자 이하로 입력해주세요.' })
      : setPasswordValue({ error: '', message: '' });
  };

  const onBlurPasswordConfirm = () => {
    !watch('passwordConfirm')
      ? setPasswordConfirmValue({ error: 'empty', message: '필수 입력 항목입니다.' })
      : setPasswordConfirmValue({ error: '', message: '' });
  };

  const onBlurName = (e: any) => {
    !watch('name')
      ? setNameValue({ error: 'empty', message: '필수 입력 항목입니다.' })
      : !validation.name.test(watch('name'))
      ? setNameValue({ error: 'pattern', message: '한글로 다시 입력해주세요.' })
      : setNameValue({ error: '', message: '' });
  };

  const onBlurBirth = (e: any) => {
    !watch(e.target.name)
      ? setBirthValue({ error: 'empty', message: '필수 입력 항목입니다.' })
      : setBirthValue({ error: '', message: '' });
  };

  const onSubmit = (data: any) => {
    // 여기서 api 호출, data 사용

    // 성공시
    navigate('/');
    // 실패시
    // 실패 안내
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DataContainer>
          <label htmlFor="email">이메일</label>
          {emailValue.error === 'empty' ? (
            <Caution>{emailValue.message}</Caution>
          ) : emailValue.error === 'pattern' ? (
            <Caution>{emailValue.message}</Caution>
          ) : (
            errors.email &&
            (errors.email?.type === 'required' ? (
              <Caution>필수 입력 항목입니다.</Caution>
            ) : errors.email?.type === 'pattern' ? (
              <Caution>Email을 정확히 입력해주세요.</Caution>
            ) : (
              <></>
            ))
          )}
          <Input
            id="email"
            type="text"
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern: {
                value: validation.email,
                message: 'Email을 정확히 입력해주세요.',
              },
            })}
            onBlur={onBlurEmail}
          />
        </DataContainer>
        <DataContainer>
          <label htmlFor="password">비밀번호</label>
          {passwordValue.error === 'empty' ? (
            <Caution>{passwordValue.message}</Caution>
          ) : passwordValue.error === 'length' ? (
            <Caution>{passwordValue.message}</Caution>
          ) : (
            errors.password &&
            (errors.password?.type === 'required' ? (
              <Caution>필수 입력 항목입니다.</Caution>
            ) : errors.password?.type === 'minLength' || errors.password?.type === 'maxLength' ? (
              <Caution>8자 이상, 20자 이하로 입력해주세요.</Caution>
            ) : (
              <></>
            ))
          )}
          <Input
            id="password"
            type="password"
            placeholder="8자 이상, 20자 이하"
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: '8자 이상, 20자 이하로 입력해주세요.',
              },
              maxLength: {
                value: 20,
                message: '8자 이상, 20자 이하로 입력해주세요.',
              },
            })}
            onBlur={onBlurPassword}
          />
        </DataContainer>
        <DataContainer>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          {passwordConfirmValue.error === 'empty' ? (
            <Caution>{passwordConfirmValue.message}</Caution>
          ) : (
            errors.passwordConfirm &&
            (errors.passwordConfirm?.type === 'required' ? (
              <Caution>필수 입력 항목입니다.</Caution>
            ) : errors.passwordConfirm?.type === 'validate' ? (
              <Caution>비밀번호가 일치하지 않습니다.</Caution>
            ) : (
              <></>
            ))
          )}

          <Input
            id="passwordConfirm"
            type="password"
            {...register('passwordConfirm', {
              required: true,
              validate: (value) => value === password.current,
            })}
            onBlur={onBlurPasswordConfirm}
          />
        </DataContainer>
        <DataContainer>
          <label htmlFor="name">이름</label>
          {nameValue.error === 'empty' ? (
            <Caution>{nameValue.message}</Caution>
          ) : nameValue.error === 'pattern' ? (
            <Caution>{nameValue.message}</Caution>
          ) : (
            errors.name &&
            (errors.name?.type === 'required' ? (
              <Caution>필수 입력 항목입니다.</Caution>
            ) : errors.name?.type === 'minLength' ? (
              <Caution>2자 이상 입력해주세요.</Caution>
            ) : errors.name?.type === 'maxLength' ? (
              <Caution>20자 이하로 입력해주세요.</Caution>
            ) : errors.name?.type === 'pattern' ? (
              <Caution>한글로 다시 입력해주세요.</Caution>
            ) : (
              <></>
            ))
          )}
          <Input
            id="name"
            type="text"
            placeholder="이름"
            {...register('name', {
              required: true,
              minLength: {
                value: 2,
                message: '2자 이상 입력해주세요.',
              },
              maxLength: {
                value: 20,
                message: '20자 이하로 입력해주세요.',
              },
              pattern: {
                value: validation.name,
                message: '한글로 입력해주세요.',
              },
            })}
            onBlur={onBlurName}
          />
        </DataContainer>
        <DataContainer>
          <label>생년월일</label>
          {birthValue.error === 'empty' ? (
            <Caution>{birthValue.message}</Caution>
          ) : (
            (errors.birthYear || errors.birthMonth || errors.birthDay) &&
            ((errors.birthYear?.type || errors.birthMonth?.type || errors.birthDay?.type) === 'required' ? (
              <Caution>필수 입력 항목입니다.</Caution>
            ) : (errors.birthYear?.type || errors.birthMonth?.type || errors.birthDay?.type) === 'max' ||
              (errors.birthYear?.type || errors.birthMonth?.type || errors.birthDay?.type) === 'min' ? (
              <Caution>생년월일을 다시 확인해주세요.</Caution>
            ) : (
              <></>
            ))
          )}

          <div className="birth">
            {birth.map(({ date, placeholder, min, max }, index) => {
              return (
                <Input
                  key={index}
                  type="number"
                  placeholder={placeholder}
                  {...register(date, {
                    required: true,
                    min: {
                      value: min,
                      message: '생년월일을 다시 확인해주세요.',
                    },
                    max: {
                      value: max,
                      message: '생년월일을 다시 확인해주세요.',
                    },
                  })}
                  onBlur={onBlurBirth}
                />
              );
            })}
          </div>
        </DataContainer>
        <Submit type="submit" value="가입하기" />
      </Form>
    </Container>
  );
};

const Form = styled(BoxForm)`
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
  height: 96px;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export default SignUp;
