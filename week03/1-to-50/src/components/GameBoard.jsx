// GameBoard.jsx

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { LEVELS } from '../constants/level';
import Card from './Card';
import {
  initializeGame,
  handleCardClick,
  getGridColumns,
  resetGame,
} from '../utils/cardUtil';

const GameBoard = ({ gameLevel, startGame, stopGame, setTimer }) => {
  const { firstSet, secondSet } = LEVELS[gameLevel];
  const [firstCards, setFirstCards] = useState([]);
  const [secondCards, setSecondCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);

  useEffect(() => {
    const { shuffledFirstNumbers, shuffledSecondNumbers } = initializeGame(
      firstSet,
      secondSet
    );
    setFirstCards(shuffledFirstNumbers);
    setSecondCards(shuffledSecondNumbers);
    setDisplayCards(shuffledFirstNumbers);
  }, [gameLevel, firstSet, secondSet]);

  useEffect(() => {
    if (nextNumber > 1) {
      startGame();
    }
  }, [nextNumber, startGame]);

  const onCardClick = (number, index) => {
    handleCardClick(
      number,
      index,
      nextNumber,
      firstSet,
      secondCards,
      setDisplayCards,
      setNextNumber,
      () =>
        resetGame(
          firstSet,
          secondSet,
          setFirstCards,
          setSecondCards,
          setDisplayCards,
          setNextNumber,
          setTimer,
          stopGame
        )
    );
  };

  return (
    <GameMainContainer>
      <GameTextWrapper>다음 숫자: {nextNumber}</GameTextWrapper>
      <CardContainer gridColumns={getGridColumns(gameLevel)}>
        {displayCards.map((number, index) => (
          <Card
            key={index}
            number={number}
            isVisible={number !== ''}
            isSecondSet={secondCards.includes(number)}
            onClick={() => onCardClick(number, index)}
          />
        ))}
      </CardContainer>
    </GameMainContainer>
  );
};

export default GameBoard;

// Styled components
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
