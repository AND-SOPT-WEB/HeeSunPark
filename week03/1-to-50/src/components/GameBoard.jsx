import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { LEVELS } from '../constants/level';

const GameBoard = ({ gameLevel }) => {
  const { firstSet, secondSet } = LEVELS[gameLevel];
  const gridColumns =
    gameLevel === 'level1'
      ? 'repeat(3, 1fr)'
      : gameLevel === 'level2'
      ? 'repeat(4, 1fr)'
      : 'repeat(5, 1fr)';
  const [firstCards, setFirstCards] = useState([]);
  const [secondCards, setSecondCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]); // 현재 보여줄 카드 배열

  useEffect(() => {
    const firstNumbers = Array.from(
      { length: firstSet },
      (_, index) => index + 1
    );
    const secondNumbers = Array.from(
      { length: secondSet - firstSet },
      (_, index) => index + firstSet + 1
    );

    const shuffledFirstNumbers = firstNumbers.sort(() => Math.random() - 0.5);
    const shuffledSecondNumbers = secondNumbers.sort(() => Math.random() - 0.5);

    setFirstCards(shuffledFirstNumbers); // 첫 번째 카드 세트 설정
    setSecondCards(shuffledSecondNumbers); // 두 번째 카드 세트 설정
    setDisplayCards(shuffledFirstNumbers); // 처음에는 첫 번째 카드 세트만 보여줌
  }, [gameLevel, firstSet, secondSet]);

  const handleCardClick = (number, index) => {
    setDisplayCards((prevDisplayCards) => {
      const newDisplayCards = [...prevDisplayCards];
      if (number <= firstSet) {
        newDisplayCards[index] = secondCards[index]; // 클릭된 카드의 위치에 두 번째 카드로 대체
      } else {
        newDisplayCards[index] = null; // 클릭된 카드가 0일 경우 빈 값으로 설정하여 사라지게
      }
      return newDisplayCards;
    });
  };

  return (
    <GameMainContainer>
      <GameTextWrapper>다음 숫자: 0</GameTextWrapper>
      <CardContainer gridColumns={gridColumns}>
        {displayCards.map((number, index) => (
          <Card
            key={index}
            onClick={() => handleCardClick(number, index)}
            isVisible={number !== null}
          >
            {number}
          </Card>
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
  background-color: ${({ theme, isVisible }) =>
    isVisible
      ? theme.colors.darkblue
      : theme.colors.lightblue}; /* 조건부 배경색 */
  color: ${({ theme, isVisible }) =>
    isVisible
      ? theme.colors.white
      : theme.colors.lightblue}; /* 조건부 텍스트 색상 */
  font-size: 1.5rem;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
