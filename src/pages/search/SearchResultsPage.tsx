import React, { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import SearchBox from './SearchResultsComponents/SearchBox';

const SearchResults = () => {
  const params = useParams();
  const [category, setCategory] = useState(0);

  const categoryArr = ['통합', '카드', '대출', '예적금', '청약'];

  return (
    <>
      <Container>
        <SearchBox params={params} />
        <CategoryTab>
          {/* {categoryArr.map((list) => {
            <input type="radio" value={list} />;
          })} */}
        </CategoryTab>
        <Card>
          <h3>카드</h3>
          <button className="viewAll">전체보기</button>
          <ul>
            <li>
              <h4>상품명</h4>
              <img src="#" alt="상품명 카드이미지" />
              <p>혜택</p>
            </li>
          </ul>
        </Card>
        <Loan>
          <h3>대출</h3>
          <button className="viewAll">전체보기</button>
          <ul>
            <li>
              <h4>상품명</h4>
              <img src="#" alt="상품명 은행로고 이미지" />
              <p>최저 4.75%</p>
            </li>
          </ul>
        </Loan>
        <Savings>
          <h3>예적금</h3>
          <button className="viewAll">전체보기</button>
          <ul>
            <li>
              <h4>상품명</h4>
              <img src="#" alt="상품명 은행로고 이미지" />
              <p>기본 4.75%</p>
              <p>최고 4.75%</p>
            </li>
          </ul>
        </Savings>
        <Subcription>
          <h3>청약</h3>
          <button className="viewAll">전체보기</button>
          <ul>
            <li>
              <h4>상품명</h4>
              <strong>은행명</strong>
              <img src="#" alt="상품명 은행로고 이미지" />
              <p>최저 4.75%</p>
            </li>
          </ul>
        </Subcription>
      </Container>
    </>
  );
};

const Container = styled.main``;
const CategoryTab = styled.div``;
const Card = styled.section``;
const Loan = styled.section``;
const Savings = styled.section``;
const Subcription = styled.section``;

export default SearchResults;
