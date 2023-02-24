import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { patchUser } from '../../common/api/Api';
import { ReducerType } from '../../store/store';
import { user } from '../../store/userSlice';
import { combineBirth } from '../../utils/combineBirth';
import { IoMdClose } from 'react-icons/io';

interface InputFormData {
  oldPassword: string;
  newPassword: string;
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

const EditUser = ({ setEditOpen }: any) => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFormData>({});

  const navigate = useNavigate();

  const newPassword = useRef<any>();
  newPassword.current = watch('newPassword');
  const birthYear = useRef<any>();
  birthYear.current = watch('birthYear');
  const birthMonth = useRef<any>();
  birthMonth.current = watch('birthMonth');

  let userData = useSelector<ReducerType, user>((state) => state.user);

  const [patchFail, setPatchFail] = useState(false);

  // 회원정보수정 끄기
  const closeEdit = () => {
    setEditOpen(false);
  };

  // 자리수 체크(생년월일)
  const lengthCheck = (event: any, max: number) => {
    if (event.target.value.length > max) {
      event.target.value = event.target.value.slice(0, max);
    }
  };

  const onSubmit = async (data: any) => {
    const newName = data.name ? data.name : userData.name;
    const newPassword = data.newPassword ? data.newPassword : data.oldPassword;
    const newBirthday = data.birthYear
      ? combineBirth(data.birthYear, data.birthMonth, data.birthDay)
      : userData.birthday;

    const resPatchUser = await patchUser(newName, data.oldPassword, newPassword, newBirthday);

    if (resPatchUser.status === 'success') {
      navigate('/');
    } else {
      setPatchFail(true);
      console.log('패치패일메시지', patchFail);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>
        {/* 회원정보 수정 */}
        <IoMdClose onClick={closeEdit} />
      </Title>
      <InputBox>
        <label htmlFor="oldPassword">현재 비밀번호</label>
        <Input
          id="oldPassword"
          type="password"
          placeholder="※필수입력"
          {...register('oldPassword', {
            required: '현재 비밀번호를 입력해주세요.',
          })}
        />
        {patchFail ? (
          <Caution>비밀번호를 다시 입력해주세요.</Caution>
        ) : errors.oldPassword ? (
          <Caution>{errors.oldPassword?.message}</Caution>
        ) : (
          <Caution />
        )}
      </InputBox>

      <InputBox>
        <label htmlFor="newPassword">새 비밀번호</label>
        <Input
          id="newPassword"
          type="password"
          {...register('newPassword', {
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
        {errors.newPassword ? <Caution>{errors.newPassword?.message}</Caution> : <Caution />}
      </InputBox>

      <InputBox>
        <label htmlFor="passwordConfirm">새 비밀번호 확인</label>
        <Input
          id="passwordConfirm"
          type="password"
          {...register('passwordConfirm', {
            required: newPassword.current ? '비밀번호 확인이 필요합니다.' : false,
            validate: (value) => {
              return value === newPassword.current
                ? true
                : !value && !newPassword.current
                ? true
                : '비밀번호가 일치하지 않습니다.';
            },
          })}
        />
        {errors.passwordConfirm ? <Caution>{errors.passwordConfirm?.message}</Caution> : <Caution />}
      </InputBox>

      <InputBox>
        <label htmlFor="name">이름</label>
        <Input
          id="name"
          type="text"
          {...register('name', {
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
              required: birthYear.current ? '태어난 월을 입력해주세요.' : false,
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
              required: birthMonth.current ? '태어난 일을 입력해주세요.' : false,
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
      <Submit className="nextButton" type="submit" value="회원정보 수정하기" />
    </Form>
  );
};

const Form = styled.form`
  margin: 70px auto 60px;
  background-color: white;
  z-index: 1000;
`;

const Title = styled.h2`
  font-size: var(--font-l);
  margin-bottom: 12px;
  position: relative;

  svg {
    position: absolute;
    right: 4px;
    top: -8px;
    width: 30px;
    height: 30px;
    color: var(--gray-color);
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;

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
  #oldPassword::placeholder {
    color: var(--red-color);
    opacity: 0.5;
  }
`;

const Input = styled.input`
  height: var(--input-height);
  font-size: var(--font-s);
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid var(--lightgray-color);
  margin-top: 3px;
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

const Submit = styled.input`
  width: 100%;
  font-size: var(--font-s);
  font-weight: 500;
  color: #ffffff;
  height: 40px;
  border-radius: 20px;
  border: none;
  background: var(--main-color);
  transition: all 0.3s ease-in-out;

  &:active {
    opacity: 0.7;
  }
`;

export default EditUser;
