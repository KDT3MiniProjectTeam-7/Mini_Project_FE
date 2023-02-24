import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { combineBirth } from '../../utils/combineBirth';
import { postLogin, postUser } from '../../common/api/Api';

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

const UserInformation = (props: any) => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormData>({ mode: 'onBlur' });

  const password = useRef<any>();
  password.current = watch('password');

  const [signUpFail, setSignUpFail] = useState(false);

  // 자리수 체크(생년월일)
  const lengthCheck = (event: any, max: number) => {
    if (event.target.value.length > max) {
      event.target.value = event.target.value.slice(0, max);
    }
  };

  // 가입하기
  const onSubmit = async (data: any) => {
    // 생일 통합
    const birth = combineBirth(data.birthYear, data.birthMonth, data.birthDay);

    // 회원가입 api 호출
    const resPostUser = await postUser(data.email, data.password, data.name, birth);

    // 회원가입 성공시 자동 로그인
    if (resPostUser.status === 'success') {
      // 로그인 api 호출
      const resPostLogin = await postLogin(data.email, data.password);
      if (resPostLogin.status === 'success') {
        props.setPage('Complete');
      } else {
        console.log('자동 로그인 에러', resPostLogin);
      }
    } else {
      // 회원가입 실패
      console.log('회원가입 에러', resPostUser.status);
      setSignUpFail(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputBox>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="text"
          {...register('email', {
            required: 'Email을 입력해주세요.',
            pattern: {
              value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,5}$/i,
              message: 'Email을 정확히 입력해주세요.',
            },
          })}
        />
        {signUpFail ? (
          <Caution>이미 가입된 Eamil 입니다.</Caution>
        ) : errors.email ? (
          <Caution>{errors.email?.message}</Caution>
        ) : (
          <Caution />
        )}
      </InputBox>
      <InputBox>
        <label htmlFor="password">비밀번호</label>
        <Input
          id="password"
          type="password"
          {...register('password', {
            required: '비밀번호를 입력해주세요.(8자 이상, 20자 이하)',
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
        {errors.password ? <Caution>{errors.password?.message}</Caution> : <Caution />}
      </InputBox>
      <InputBox>
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <Input
          id="passwordConfirm"
          type="password"
          {...register('passwordConfirm', {
            required: '비밀번호 확인이 필요합니다.',
            validate: (value) => value === password.current,
          })}
        />
        {errors.passwordConfirm ? (
          errors.passwordConfirm?.type === 'validate' ? (
            <Caution>비밀번호가 일치하지 않습니다.</Caution>
          ) : (
            <Caution>{errors.passwordConfirm?.message}</Caution>
          )
        ) : (
          <Caution />
        )}
      </InputBox>
      <InputBox>
        <label htmlFor="name">이름</label>
        <Input
          id="name"
          type="text"
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
        {errors.name ? <Caution>{errors.name?.message}</Caution> : <Caution />}
      </InputBox>
      <InputBox>
        <label>생년월일</label>
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
        {(errors.birthYear && <Caution>{errors.birthYear?.message}</Caution>) ||
          (errors.birthMonth && <Caution>{errors.birthMonth?.message}</Caution>) ||
          (errors.birthDay && <Caution>{errors.birthDay?.message}</Caution>) || <Caution />}
      </InputBox>
      <BottomContainer>
        <input className="nextButton" type="submit" value="회원 가입하기" />
      </BottomContainer>
    </Form>
  );
};

const Form = styled.form`
  min-height: 100vh;
  padding: 60px 20px 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  label {
    font-size: var(--font-s);
    color: var(--gray-color);
  }
  .birth {
    display: flex;
    justify-content: space-between;
    input {
      width: 30%;
    }
  }
`;

const Input = styled.input`
  height: var(--input-height);
  font-size: var(--font-s);
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid var(--lightgray-color);
  margin-top: 6px;
  margin-bottom: 3px;

  :focus {
    outline: none;
    border-bottom: 2px solid var(--main-color);
  }
`;

const Caution = styled.small`
  font-size: var(--font-xs);
  color: var(--red-color);
  height: 10px;
`;

const BottomContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;

  .nextButton {
    width: 100%;
    background-color: var(--main-color);
    height: 50px;
    font-size: var(--font-m);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    font-weight: bold;
    margin-top: 10px;
    border-radius: 50px;
  }
`;

export default UserInformation;
