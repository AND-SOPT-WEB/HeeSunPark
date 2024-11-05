import React from 'react';
import styled from '@emotion/styled';
import { useGameLogic } from '../utils/gameLogic';
import Card from './Card';
import { LEVELS } from '../constants/level';

const GameBoard = ({ gameLevel }) => {
  const { firstSet, secondSet } = LEVELS[gameLevel];

  const { displayCards, nextNumber, timer, handleCardClick, initializeGame } =
    useGameLogic(gameLevel);

  const initiateGame = () => {
    // 게임 초기화 로직
    initializeGame();
  };

  const getGridColumns = (gameLevel) => {
    let gridColumns;

    if (gameLevel === 'level1') {
      gridColumns = 'repeat(3, 1fr)'; // 3x3 그리드
    } else if (gameLevel === 'level2') {
      gridColumns = 'repeat(4, 1fr)'; // 4x4 그리드
    } else {
      gridColumns = 'repeat(5, 1fr)'; // 5x5 그리드
    }

    return gridColumns;
  };

  return (
    <GameMainContainer>
      <GameTextWrapper>다음 숫자: {nextNumber}</GameTextWrapper>
      <CardContainer gridColumns={getGridColumns(gameLevel)}>
        {displayCards.map((number, index) => {
          // 두 번째 셋인지 확인 (secondSet의 값 이상이면 두 번째 셋으로 간주)
          const isSecondSet = number > firstSet;

          return (
            <Card
              key={index}
              number={number}
              isVisible={number !== ''}
              isSecondSet={isSecondSet} // isSecondSet 전달
              onClick={() => handleCardClick(number, index, initiateGame)}
            />
          );
        })}
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
