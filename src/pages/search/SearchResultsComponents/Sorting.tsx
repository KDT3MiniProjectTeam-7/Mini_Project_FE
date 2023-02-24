import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  active: string;
  setActive: (value: string) => void;
};

const CardSorting = ({ active, setActive }: Props) => {
  const sortFee = () => {
    setActive('fee');
  };

  const sortName = () => {
    setActive('name');
  };

  return (
    <Container>
      <button onClick={sortFee} className={active === 'fee' ? 'clicked' : ''}>
        연회비순
      </button>
      <button onClick={sortName} className={active === 'name' ? 'clicked' : ''}>
        상품명순
      </button>
    </Container>
  );
};

const LoanSorting = ({ active, setActive }: Props) => {
  const sortName = () => {
    setActive('name');
  };

  const sortLowRate = () => {
    setActive('lowRate');
  };
  return (
    <Container>
      <button onClick={sortLowRate} className={active === 'lowRate' ? 'clicked' : ''}>
        낮은금리순
      </button>
      <button onClick={sortName} className={active === 'name' ? 'clicked' : ''}>
        상품명순
      </button>
    </Container>
  );
};

const ProductSorting = ({ active, setActive }: Props) => {
  const sortName = () => {
    setActive('name');
  };

  const sortHighRate = () => {
    setActive('highRate');
  };
  return (
    <Container>
      <button onClick={sortHighRate} className={active === 'highRate' ? 'clicked' : ''}>
        높은금리순
      </button>
      <button onClick={sortName} className={active === 'name' ? 'clicked' : ''}>
        상품명순
      </button>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 20px;
  margin-bottom: 30px;
  font-size: var(--font-s);
  button {
    cursor: pointer;
    border: none;

    padding: 10px 15px;
    border-radius: 20px;
    background-color: var(--lightgray-color);
    color: var(--gray-color);

    &.clicked {
      background-color: #fff;
      color: var(--black-color);
      border: 2px solid var(--black-color);
    }
  }

  button + button {
    margin-left: 10px;
  }
`;

export { CardSorting, LoanSorting, ProductSorting };
