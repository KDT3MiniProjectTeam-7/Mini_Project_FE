import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { postTags } from '../../common/api/Api';

const Survey = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    let submitData: any = Object.values(data).filter((v) => v !== false);

    if (submitData.filter((v: any) => v === null).length > 0) {
      alert('체크하지 않은 항목이 있는지 확인해주세요.');
    } else {
      postTags(submitData);
      navigate('/surveyComplate');
    }
  };

  return (
    <>
      <Container>
        <Header>
          <IoChevronBackOutline
            size="22"
            color="#353D4A"
            onClick={() => {
              navigate(-1);
            }}
            style={{ marginLeft: '-8px' }}
          />

          <Logo to={'/'}>맞춤 테스트</Logo>
        </Header>

        <p>
          설문의 결과를 바탕으로 상품을 추천해드리며,
          <br />
          체크하지 않은 항목의 경우 관련 상품이
          <br />
          추천 상품에서 제외될 수 있습니다.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {page === 1 && (
            <>
              <div>
                <p>나이</p>
                <div>
                  <input type="radio" id="age_19" value="미성년자" {...register('age')} />
                  <label htmlFor="age_19">19세 미만</label>
                  <input type="radio" id="age_20" value="청년" {...register('age')} />
                  <label htmlFor="age_20">20세 이상</label>
                  <input type="radio" id="age_40" value="중년" {...register('age')} />
                  <label htmlFor="age_40">40세 이상</label>
                  <input type="radio" id="age_50" value="장년" {...register('age')} />
                  <label htmlFor="age_50">50세 이상</label>
                  <input type="radio" id="age_65" value="노년" {...register('age')} />
                  <label htmlFor="age_65">65세 이상</label>
                </div>
              </div>
              <div>
                <p>직업</p>
                <div>
                  <input type="radio" id="student" value="학생" {...register('jab')} />
                  <label htmlFor="student">학생</label>
                  <input type="radio" id="officeWorker" value="직장인" {...register('jab')} />
                  <label htmlFor="officeWorker">직장인</label>
                  <input type="radio" id="entrepreneur" value="사업자" {...register('jab')} />
                  <label htmlFor="entrepreneur">사업자</label>
                  <input type="radio" id="none" value="무직" {...register('jab')} />
                  <label htmlFor="none">무직</label>
                </div>
              </div>
              <div>
                <p>결혼여부</p>
                <div>
                  <input type="radio" id="marry_yes" value="기혼" {...register('marry')} />
                  <label htmlFor="marry_yes">기혼</label>
                  <input type="radio" id="marry_no" value="미혼" {...register('marry')} />
                  <label htmlFor="marry_no">미혼</label>
                </div>
              </div>
              <button
                className="next_btn"
                type="button"
                onClick={() => {
                  setPage(2);
                }}
              >
                다음
              </button>
            </>
          )}
          {page === 2 && (
            <>
              <div>
                <p>주 이동수단</p>
                <div>
                  <input type="radio" id="car_yes" value="자차" {...register('car')} />
                  <label htmlFor="car_yes">자차</label>
                  <input type="radio" id="car_no" value="대중교통" {...register('car')} />
                  <label htmlFor="car_no">대중교통</label>
                </div>
              </div>
              <div>
                <p>주택 보유여부</p>
                <div>
                  <input type="radio" id="house_yes" value="주택소유" {...register('house')} />
                  <label htmlFor="house_yes">소유</label>
                  <input type="radio" id="house_no" value="무주택자" {...register('house')} />
                  <label htmlFor="house_no">미소유</label>
                </div>
              </div>
              <div>
                <p>연소득</p>
                <div>
                  <input type="radio" id="low_income" value="저소득" {...register('income')} />
                  <label htmlFor="low_income">2000 미만</label>
                  <input type="radio" id="mid_income" value="중위소득" {...register('income')} />
                  <label htmlFor="mid_income">6000 미만</label>
                  <input type="radio" id="hig_income" value="고소득" {...register('income')} />
                  <label htmlFor="hig_income">6000 초과</label>
                </div>
              </div>
              <button
                className="prev_btn"
                type="button"
                onClick={() => {
                  setPage(1);
                }}
              >
                이전
              </button>
              <button
                className="next_btn"
                type="button"
                onClick={() => {
                  setPage(3);
                }}
              >
                다음
              </button>
            </>
          )}
          {page === 3 && (
            <>
              <div>
                <p>
                  관심 혜택 <span>중복 체크 가능</span>
                </p>
                <div>
                  <input type="checkbox" id="movie" value="문화생활" {...register('영화')} />
                  <label htmlFor="movie">영화</label>
                  <input type="checkbox" id="performance" value="문화생활" {...register('공연')} />
                  <label htmlFor="performance">공연</label>
                  <input type="checkbox" id="health" value="헬스케어" {...register('헬스케어')} />
                  <label htmlFor="health">헬스케어</label>

                  <input type="checkbox" id="pet" value="반려동물" {...register('반려동물')} />
                  <label htmlFor="pet">반려동물</label>
                  <input type="checkbox" id="shopping" value="쇼핑" {...register('쇼핑')} />
                  <label htmlFor="shopping">쇼핑</label>

                  <input type="checkbox" id="beauty" value="뷰티" {...register('뷰티')} />
                  <label htmlFor="beauty">뷰티</label>

                  <input type="checkbox" id="travel" value="여행" {...register('여행')} />
                  <label htmlFor="travel">여행</label>
                  <input type="checkbox" id="phone" value="통신" {...register('통신')} />
                  <label htmlFor="phone">통신</label>
                  <input type="checkbox" id="food" value="외식" {...register('외식')} />
                  <label htmlFor="food">외식</label>
                  <input type="checkbox" id="cafe" value="카페 베이커리" {...register('카페 베이커리')} />
                  <label htmlFor="cafe">카페 베이커리</label>
                </div>
              </div>

              <button
                className="prev_btn"
                type="button"
                onClick={() => {
                  setPage(2);
                }}
              >
                이전
              </button>
              <button className="submit_btn">설문완료</button>
            </>
          )}
        </form>
      </Container>
    </>
  );
};

const Logo = styled(Link)`
  font-weight: 700;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  width: 100%;
  position: relative;
`;

const Container = styled.main`
  margin: 0 auto;
  height: 100vh;
  padding-top: 20px;

  & > p {
    line-height: 1.5;
    font-size: 15px;
    margin-top: 50px;
  }

  form {
    height: 400px;

    & > div > div {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      flex-wrap: wrap;
    }

    input[type='number'] {
      width: 100%;
      border: 1px solid #ddd;
      padding: 5px 10px;
      border-radius: 20px;
    }

    input[type='number']:focus {
      outline: none;
    }

    .prev_btn {
      position: absolute;
      bottom: 40px;
      left: 20px;
    }

    .next_btn,
    .submit_btn {
      position: absolute;
      bottom: 40px;
      right: 20px;
    }

    p {
      margin-top: 40px;
      font-size: 15px;
      font-weight: 500;
    }

    input[type='radio'],
    input[type='checkbox'] {
      display: none;
    }

    input[type='radio'] + label,
    input[type='checkbox'] + label {
      padding: 7px 10px;
      background: #eee;
      border-radius: 20px;
      color: #000;
      font-size: 14px;
      font-weight: 500;
    }

    input[type='radio']:checked + label,
    input[type='checkbox']:checked + label {
      background: rgb(14, 118, 255);
      color: #fff;
    }

    button {
      font-size: 14px;
      font-weight: 500;
      border-radius: 20px;
      border: none;
      padding: 7px 15px;
      color: #fff;
      background: rgb(14, 118, 255);
    }
  }
`;

export default Survey;
