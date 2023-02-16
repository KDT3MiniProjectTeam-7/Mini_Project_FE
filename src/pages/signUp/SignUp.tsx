import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BoxForm, Container, LinkForm as Link, InputForm as Input, Caution } from '../../common/style/style';
import { Submit } from '../login/Login';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const birth = [
    { date: 'birthYear', placeholder: '년(4자)', min: 1900, max: new Date().getFullYear() },
    { date: 'birthMonth', placeholder: '월', min: 1, max: 12 },
    { date: 'birthDay', placeholder: '일', min: 1, max: 31 },
  ];

  const [isPasswordSame, setIsPasswordSame] = useState(true);

  const handleBlur = () => {
    watch('password') === watch('passwordConfirm') ? setIsPasswordSame(true) : setIsPasswordSame(false);
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
          {errors.email &&
            (errors.email?.type === 'required' ? (
              <Caution>필수 입력 항목입니다.</Caution>
            ) : errors.email?.type === 'pattern' ? (
              <Caution>Email을 정확히 입력해주세요.</Caution>
            ) : (
              <></>
            ))}
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
        </DataContainer>
        <DataContainer>
          <label htmlFor="password">비밀번호</label>
          {errors.password &&
            (errors.password?.type === 'required' ? (
              <Caution>필수 입력 항목입니다.</Caution>
            ) : errors.password?.type === 'minLength' ? (
              <Caution>8자 이상 입력해주세요.</Caution>
            ) : errors.password?.type === 'maxLength' ? (
              <Caution>20자 이하로 입력해주세요.</Caution>
            ) : (
              <></>
            ))}
          <Input
            id="password"
            type="password"
            placeholder="8자 이상, 20자 이하"
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: '8자 이상 입력해주세요.',
              },
              maxLength: {
                value: 20,
                message: '20자 이하로 입력해주세요.',
              },
            })}
          />
        </DataContainer>
        <DataContainer>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          {errors.passwordConfirm && errors.passwordConfirm?.type === 'required' ? (
            <Caution>필수 입력 항목입니다.</Caution>
          ) : isPasswordSame ? (
            <></>
          ) : (
            <Caution>비밀번호가 일치하지 않습니다.</Caution>
          )}
          <Input
            id="passwordConfirm"
            type="password"
            {...register('passwordConfirm', {
              required: true,
            })}
            onBlur={handleBlur}
          />
        </DataContainer>
        <DataContainer>
          <label htmlFor="name">이름</label>
          {errors.name &&
            (errors.name?.type === 'required' ? (
              <Caution>필수 입력 항목입니다.</Caution>
            ) : errors.name?.type === 'minLength' ? (
              <Caution>2자 이상 입력해주세요.</Caution>
            ) : errors.name?.type === 'maxLength' ? (
              <Caution>20자 이하로 입력해주세요.</Caution>
            ) : errors.name?.type === 'pattern' ? (
              <Caution>이름을 다시 입력해주세요.</Caution>
            ) : (
              <></>
            ))}
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
                value: /^[가-힣]+$/,
                message: '이름을 다시 입력해주세요.',
              },
            })}
          />
        </DataContainer>
        <DataContainer>
          <label>생년월일</label>
          {(errors.birthYear || errors.birthMonth || errors.birtyDay) &&
            ((errors.birthYear?.type || errors.birthMonth?.type || errors.birtyDay?.type) === 'required' ? (
              <Caution>필수 입력 항목입니다.</Caution>
            ) : (errors.birthYear?.type || errors.birthMonth?.type || errors.birtyDay?.type) === 'max' ||
              (errors.birthYear?.type || errors.birthMonth?.type || errors.birtyDay?.type) === 'min' ? (
              <Caution>날짜를 정확히 입력해주세요.</Caution>
            ) : (
              <></>
            ))}

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
                      message: '날짜를 정확히 입력해주세요.',
                    },
                    max: {
                      value: max,
                      message: '날짜를 정확히 입력해주세요.',
                    },
                  })}
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
