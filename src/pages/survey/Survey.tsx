import { useState } from 'react';
import styled from 'styled-components';

const Survey = () => {
  const [page, setPage] = useState(1);

  return (
    <Container>
      <p>
        설문의 결과를 바탕으로 상품을 추천해드리며,<br/>
        체크하지 않은 항목의 경우 관련 상품이<br/>
        추천 상품에서 제외될 수 있습니다.
      </p>

      <form action="">
        {
          page === 1 && (
            <>
              <div>
                <p>나이</p>
                <input className='age_input' type="number"  placeholder='나이를 입력해주세요.'/>
              </div>

              <div>
                <p>직업</p>
                <div>
                  <input type="radio" id="student" value="학생" name="jab" />
                  <label htmlFor="student">학생</label>
                  <input type="radio" id="officeWorker" value="직장인" name="jab" />
                  <label htmlFor="officeWorker">직장인</label>
                  <input type="radio" id="entrepreneur" value="사업자" name="jab" />
                  <label htmlFor="entrepreneur">사업자</label>
                  <input type="radio" id="none" value="무직" name="jab" />
                  <label htmlFor="none">무직</label>
                </div>
              </div>

              <div>
                <p>결혼여부</p>
                <div>
                  <input type="radio" id="marry_yes" value="기혼" name="marry" />
                  <label htmlFor="marry_yes">기혼</label>
                  <input type="radio" id="marry_no" value="미혼" name="marry" />
                  <label htmlFor="marry_no">미혼</label>
                </div>
              </div>

              <button className='next_btn' type='button' onClick={() => {setPage(2)}}>다음</button>
            </>
          )
        }
        {
          page === 2 && (
            <>
              <div>
                <p>주 이동수단</p>
                <div>
                  <input type="radio" id="car_yes" value="자차" name="car" />
                  <label htmlFor="car_yes">자차</label>
                  <input type="radio" id="car_no" value="대중교통" name="car" />
                  <label htmlFor="car_no">대중교통</label>
                </div>
              </div>

              <div>
                <p>주택 보유여부</p>
                <div>
                  <input type="radio" id="house_yes" value="소유" name="house" />
                  <label htmlFor="house_yes">소유</label>
                  <input type="radio" id="house_no" value="미소유" name="house" />
                  <label htmlFor="house_no">미소유</label>
                </div>
              </div>

              <div>
                <p>연소득</p>
                <input type="number" />
              </div>

              <button className="prev_btn" type='button' onClick={() => {setPage(1)}}>이전</button>
              <button className="next_btn" type='button' onClick={() => {setPage(3)}}>다음</button>
            </>
          )
        }
        {
          page === 3 && (
            <>
              <div>
                <p>관심분야</p>
                <div>
                  <input type="checkbox" id="culture" value="문화생활"/>
                  <label htmlFor="culture">문화생활</label>

                  <input type="checkbox" id="shopping" value="쇼핑"/>
                  <label htmlFor="shopping">쇼핑</label>
                  
                  <input type="checkbox" id="beauty" value="뷰티"/>
                  <label htmlFor="beauty">뷰티</label>
                  
                  <input type="checkbox" id="travel" value="여행"/>
                  <label htmlFor="travel">여행</label>
                </div>
              </div>
              
              <button className="prev_btn" type='button' onClick={() => {setPage(2)}}>이전</button>
              <button className="submit_btn" type='button'>설문완료</button>
            </>
          )
        }
      </form>
    </Container>
  );
};

const Container = styled.main`
  padding-top:30px;

  &>p {
    line-height:1.5;
    font-size:15px;
  }

  form {
    padding-top:50px;
    position:relative;
    height:400px;

    &>div>div {
      display:flex;
      gap:10px;
      margin-top:20px;
    }
  
    input[type="number"] {
      width:100%;
      border:1px solid #ddd;
      padding:5px 10px;
      border-radius:20px;
    }

    input[type="number"]:focus {
      outline:none;
    }

    .prev_btn { 
      position:absolute;
      bottom:0;
      left:0;
    }

    .next_btn,.submit_btn { 
      position:absolute;
      bottom:0;
      right:0;
    }

    p {
      margin:20px 0 10px;
      font-size:15px;
      font-weight:500;
    }

    input[type='radio'],
    input[type='checkbox']{
      display:none
    }

    input[type='radio'] + label,
    input[type='checkbox'] + label {
      padding:7px 10px;
      background:#eee;
      border-radius:20px;
      color: #000;
      font-size:14px;
      font-weight:500;
    }

    input[type='radio']:checked + label,
    input[type='checkbox']:checked + label {
      background:rgb(14, 118, 255);
      color:#fff;
    }

    button { 
      font-size:14px;
      font-weight:500;
      border-radius:20px;
      border:none;
      padding:7px 15px;
      color:#fff;
      background:rgb(14, 118, 255);
    }
  }
`;

export default Survey;
