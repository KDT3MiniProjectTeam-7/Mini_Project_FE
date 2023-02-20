import { useState } from 'react';
import styled from 'styled-components';

const CardSorting = () => {
  const [active, setActive] = useState('fee');

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

const LoanSorting = () => {
  const [active, setActive] = useState('name');

  const sortName = () => {
    setActive('name');
  };

  const sortLowRate = () => {
    setActive('lowRate');
  };
  return (
    <Container>
      <button onClick={sortName} className={active === 'name' ? 'clicked' : ''}>
        상품명순
      </button>
      <button onClick={sortLowRate} className={active === 'lowRate' ? 'clicked' : ''}>
        낮은금리순
      </button>
    </Container>
  );
};

const ProductSorting = () => {
  const [active, setActive] = useState('name');

  const sortName = () => {
    setActive('name');
  };

  const sortHighRate = () => {
    setActive('highRate');
  };
  return (
    <Container>
      <button onClick={sortName} className={active === 'name' ? 'clicked' : ''}>
        상품명순
      </button>
      <button onClick={sortHighRate} className={active === 'highRate' ? 'clicked' : ''}>
        높은금리순
      </button>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 30px;

  button {
    cursor: pointer;
    border: none;

    padding: 10px 15px;
    border-radius: 20px;
    background-color: #f0f1f6;
    color: #606163;

    &.clicked {
      background-color: #fff;
      color: #000;
      border: 2px solid #000;
    }
  }

  button + button {
    margin-left: 10px;
  }
`;

export { CardSorting, LoanSorting, ProductSorting };
