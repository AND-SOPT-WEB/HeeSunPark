// Card.js
import React, { useState } from 'react';
import styled from '@emotion/styled';

const Card = ({ number, isVisible, isSecondSet, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();

    // 클릭 효과가 잠깐 유지되도록 설정
    setTimeout(() => {
      setIsClicked(false);
    }, 200); // 클릭 효과 유지 시간 (200ms)
  };

  return (
    <StyledCard
      onClick={handleClick}
      isVisible={isVisible}
      isSecondSet={isSecondSet}
      isClicked={isClicked} // 클릭 상태 전달
    >
      {number}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isVisible, isSecondSet }) =>
    isVisible
      ? isSecondSet
        ? theme.colors.blue
        : theme.colors.darkblue
      : 'transparent'};
  color: ${({ theme, isVisible }) =>
    isVisible ? theme.colors.white : 'transparent'};
  font-size: 1.5rem;
  font-weight: 700;
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  transition: background-color 0.2s ease, transform 0.1s ease; // 부드러운 전환

  ${({ isClicked }) =>
    isClicked &&
    `
    background-color: rgba(255, 255, 255, 0.2); // 클릭 시 배경색 변경
    transform: scale(1.02); // 클릭 시 약간 확대
  `}

  &:hover {
    background-color: ${({ theme, isVisible, isSecondSet }) =>
      isVisible
        ? isSecondSet
          ? theme.colors.mediumblue
          : theme.colors.blue
        : 'transparent'};
  }
`;
