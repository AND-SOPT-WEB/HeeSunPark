// GameBoard.jsx
import React from 'react';
import styled from '@emotion/styled';
import { LEVELS } from '../constants/level'; // 상수 파일 import

const GameBoard = ({ gameLevel }) => {
  const cardCount = LEVELS[gameLevel]; // 선택된 레벨에 따른 카드 개수
  const gridColumns =
    gameLevel === 'level1'
      ? 'repeat(3, 1fr)'
      : gameLevel === 'level2'
      ? 'repeat(4, 1fr)'
      : 'repeat(5, 1fr)'; // 레벨에 따른 그리드 설정

  const numbers = Array.from({ length: cardCount }, (_, index) => index + 1);
  const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);

  return (
    <GameMainContainer>
      <GameTextWrapper>다음 숫자: 0</GameTextWrapper>
      <CardContainer gridColumns={gridColumns}>
        {shuffledNumbers.map((number) => (
          <Card key={number}>{number}</Card>
        ))}
      </CardContainer>
    </GameMainContainer>
  );
};

export default GameBoard;

const GameMainContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameTextWrapper = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const CardContainer = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: ${({ gridColumns }) => gridColumns};
  gap: 1rem;
`;

const Card = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkblue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
