import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postLogout } from '../../common/api/Api';

const ModalLogout = ({ setModalOpen }: any) => {
  const navigate = useNavigate();

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event: any) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event?.target)) {
        setModalOpen(false);
      }
    };
    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  const logoutClick = async () => {
    const resPostLogout = await postLogout();
    navigate('/login');
  };

  return (
    <Modal ref={modalRef}>
      <p>로그아웃 하시겠습니까?</p>
      <button className="logout" onClick={logoutClick}>
        로그아웃
      </button>
      <button className="close" onClick={closeModal}>
        취소
      </button>
    </Modal>
  );
};

const Modal = styled.section`
  width: 280px;
  height: 180px;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  border: 1px solid var(--lightgray-color);
  line-height: 120px;
  background-color: #ffffff;
  z-index: 999;

  p {
    margin: 20px;
    font-size: var(--font-l);
    text-align: center;
    background-color: #ffffff;
  }

  button {
    border: none;
    background-color: #ffffff;
    position: absolute;
    height: 40px;
    width: 50%;
    bottom: 0;
    border-top: 1px solid var(--lightgray-color);
    font-size: var(--font-m);
    transition: all 0.3s ease-in-out;

    &:active {
      color: var(--main-color);
    }
  }

  .logout {
    left: 0;
    border-right: 1px solid var(--lightgray-color);
    border-bottom-left-radius: 20px;
  }

  .close {
    right: 0;
    border-bottom-right-radius: 20px;
  }
`;

export default ModalLogout;
