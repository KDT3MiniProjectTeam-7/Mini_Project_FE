import styled from 'styled-components';
import { HiCheckCircle } from 'react-icons/hi';

interface toastProps {
  isTrue: boolean;
  message: string;
}

const Toast = ({ isTrue, message }: toastProps) => {
  return (
    <Container className={isTrue ? 'active' : ''}>
      <span>
        <HiCheckCircle color="#59BD83" size="26" />
      </span>
      <p>{message}</p>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 120px;
  opacity: 0;
  width: fit-content;
  height: 50px;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 40px;
  background-color: #76859e;
  transition: all 0.2s ease-in;

  span {
    margin-right: 10px;
  }

  p {
    padding: 5px 0;
    border: 0;
    color: #fff;
    font-size: var(--font-m);
  }

  &.active {
    animation: fadeOut 1.5s ease-in-out;

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      15% {
        opacity: 1;
      }
      95% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

export default Toast;
