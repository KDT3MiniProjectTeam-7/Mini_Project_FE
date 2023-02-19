import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Submit } from '../login/Login';
import { useRef } from 'react';

interface InputFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  errors: {
    email: {
      message: string;
    };
  };
}

const SignUp = () => {
  const navigate = useNavigate();
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormData>({ mode: 'onBlur' });

  const password = useRef<any>();
  password.current = watch('password');

  // 생년월일 자리수 체크
  const lengthCheck = (event: any, max: number) => {
    if (event.target.value.length > max) {
      event.target.value = event.target.value.slice(0, max);
    }
  };

  // 제출
  const onSubmit = (data: any) => {
    console.log('api호출');
    // 여기서 api 호출, data 사용

    // 성공시
    navigate('/');

    // 실패시
    // 실패 안내
  };

  return (
    <main>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DataContainer>
          <label htmlFor="email">이메일</label>
          {errors.email && <Caution>{errors.email?.message}</Caution>}
          <Input
            id="email"
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'Email을 입력해주세요.',
              pattern: {
                value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,5}$/i,
                message: 'Email을 정확히 입력해주세요.',
              },
            })}
          />
        </DataContainer>
        <DataContainer>
          <label htmlFor="password">비밀번호</label>
          {errors.password && <Caution>{errors.password?.message}</Caution>}
          <Input
            id="password"
            type="password"
            placeholder="8자 이상, 20자 이하"
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message: '8자 이상, 20자 이하로 입력해주세요.',
              },
              maxLength: {
                value: 20,
                message: '8자 이상, 20자 이하로 입력해주세요.',
              },
            })}
          />
        </DataContainer>
        <DataContainer>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          {errors.passwordConfirm &&
            (errors.passwordConfirm?.type === 'validate' ? (
              <Caution>비밀번호가 일치하지 않습니다.</Caution>
            ) : (
              <Caution>{errors.passwordConfirm?.message}</Caution>
            ))}
          <Input
            id="passwordConfirm"
            type="password"
            {...register('passwordConfirm', {
              required: '비밀번호 확인이 필요합니다.',
              validate: (value) => value === password.current,
            })}
          />
        </DataContainer>
        <DataContainer>
          <label htmlFor="name">이름</label>
          {errors.name && <Caution>{errors.name?.message}</Caution>}
          <Input
            id="name"
            type="text"
            placeholder="이름"
            {...register('name', {
              required: '필수 입력 항목입니다.',
              minLength: {
                value: 2,
                message: '2자 이상 입력해주세요.',
              },
              maxLength: {
                value: 20,
                message: '20자 이하로 입력해주세요.',
              },
              pattern: {
                value: /^[가-힣]+$/,
                message: '한글로 정확하게 입력해주세요.',
              },
            })}
          />
        </DataContainer>
        <DataContainer>
          <label>생년월일</label>
          {(errors.birthYear && <Caution>{errors.birthYear?.message}</Caution>) ||
            (errors.birthMonth && <Caution>{errors.birthMonth?.message}</Caution>) ||
            (errors.birthDay && <Caution>{errors.birthDay?.message}</Caution>)}
          <div className="birth">
            <Input
              type="number"
              placeholder="년도(4자리)"
              onInput={(event) => lengthCheck(event, 4)}
              {...register('birthYear', {
                required: '태어난 년도(4자리)를 입력해주세요.',
                min: {
                  value: 1900,
                  message: '태어난 년도(4자리)를 정확하게 입력해주세요.',
                },
                max: {
                  value: new Date().getFullYear(),
                  message: '태어난 년도(4자리)를 정확하게 입력해주세요.',
                },
              })}
            />
            <Input
              type="number"
              placeholder="월"
              onInput={(event) => lengthCheck(event, 2)}
              {...register('birthMonth', {
                required: '태어난 월을 입력해주세요.',
                min: {
                  value: 1,
                  message: '태어난 월을 정확하게 입력해주세요.',
                },
                max: {
                  value: 12,
                  message: '태어난 월을 정확하게 입력해주세요.',
                },
              })}
            />
            <Input
              type="number"
              placeholder="일"
              onInput={(event) => lengthCheck(event, 2)}
              {...register('birthDay', {
                required: '태어난 일을 입력해주세요.',
                min: {
                  value: 1,
                  message: '태어난 일을 정확하게 입력해주세요.',
                },
                max: {
                  value: 31,
                  message: '태어난 일을 정확하게 입력해주세요.',
                },
              })}
            />
          </div>
        </DataContainer>
        <Submit className="submit" type="submit" value="가입하기" />
      </Form>
    </main>
  );
};

const Title = styled.h1`
  font-size: var(--font-xxl);
`;

const Form = styled.form`
  gap: 70px; // 현재 작동 안함. 세로 사이즈 조정 필요

  label {
    font-size: var(--font-l);
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  gap: 4px;
`;

const Input = styled.input`
  height: var(--input-height);
  font-size: var(--font-m);
  padding: 0 14px;
  box-sizing: border-box;
  background-color: var(--lightblue-color);
  border-radius: 20px;
  border: none;

  :focus {
    outline: none;
  }
`;

const Caution = styled.small`
  font-size: var(--font-xs);
  color: var(--red-color);
`;

export default SignUp;
