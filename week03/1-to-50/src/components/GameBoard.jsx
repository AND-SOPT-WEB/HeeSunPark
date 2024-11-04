import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { LEVELS } from '../constants/level';
import {
  generateShuffledCards,
  updateDisplayCards,
  getGridColumns,
} from '../utils/cardUtil';

const GameBoard = ({ gameLevel, startGame, stopGame, setTimer }) => {
  const { firstSet, secondSet } = LEVELS[gameLevel];
  const gridColumns = getGridColumns(gameLevel);

  const [firstCards, setFirstCards] = useState([]);
  const [secondCards, setSecondCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);

  useEffect(() => {
    const { shuffledFirstNumbers, shuffledSecondNumbers } =
      generateShuffledCards(firstSet, secondSet);
    setFirstCards(shuffledFirstNumbers);
    setSecondCards(shuffledSecondNumbers);
    setDisplayCards(shuffledFirstNumbers);
  }, [gameLevel, firstSet, secondSet]);

  useEffect(() => {
    let interval;
    if (nextNumber > 1) {
      startGame();
      interval = setInterval(() => {
        setTimer((prev) => prev + 0.01);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [nextNumber, startGame, setTimer]);

  const handleCardClick = (number, index) => {
    if (number !== nextNumber) {
      alert(`${nextNumber}을 클릭해주세요.`);
      return;
    } // 유효성 검사

    if (number === LEVELS[gameLevel].secondSet) {
      stopGame();
      return;
    }

    setDisplayCards((prevDisplayCards) =>
      updateDisplayCards(prevDisplayCards, firstSet, secondCards, index)
    );
    setNextNumber((prev) => prev + 1);
  };

  return (
    <GameMainContainer>
      <GameTextWrapper>다음 숫자: {nextNumber}</GameTextWrapper>
      <CardContainer gridColumns={gridColumns}>
        {displayCards.map((number, index) => (
          <Card
            key={index}
            onClick={() => handleCardClick(number, index)}
            isVisible={number !== ''}
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
    isVisible ? theme.colors.darkblue : 'transparent'};
  color: ${({ theme, isVisible }) =>
    isVisible ? theme.colors.white : 'transparent'};
  font-size: 1.5rem;
  font-weight: 700;
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};

  &:hover {
    background-color: ${({ theme, isVisible }) =>
      isVisible ? theme.colors.blue : 'transparent'};
  }
`;
