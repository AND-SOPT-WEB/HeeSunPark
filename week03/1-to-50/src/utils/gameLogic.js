import { useState, useEffect } from 'react';
import { LEVELS } from '../constants/level';

export const useGameLogic = (gameLevel) => {
  const { firstSet, secondSet } = LEVELS[gameLevel];
  const [firstCards, setFirstCards] = useState([]);
  const [secondCards, setSecondCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [timer, setTimer] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  const generateShuffledCards = () => {
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

    return { shuffledFirstNumbers, shuffledSecondNumbers };
  };

  const initializeGame = () => {
    const { shuffledFirstNumbers, shuffledSecondNumbers } =
      generateShuffledCards();
    setFirstCards(shuffledFirstNumbers);
    setSecondCards(shuffledSecondNumbers);
    setDisplayCards(shuffledFirstNumbers);
    setNextNumber(1);
    setTimer(0);
    setIsTimerStarted(false);
  };

  const handleCardClick = (number, index, initiateGame) => {
    if (!isTimerStarted) {
      initiateGame(); // 타이머 시작을 외부에서 호출
      setIsTimerStarted(true);
    }

    if (number !== nextNumber) {
      alert(`${nextNumber}을 클릭해주세요.`);
      return;
    }

    if (number === secondSet) {
      alert(`게임 종료! 걸린 시간: ${timer.toFixed(2)}초`);
      initializeGame();
      return;
    }

    const newDisplayCards = [...displayCards];
    if (number <= firstSet) {
      newDisplayCards[index] = secondCards[index];
    } else {
      newDisplayCards[index] = ''; // 빈 값으로 설정하여 카드 숨기기
    }
    setDisplayCards(newDisplayCards);
    setNextNumber((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTimerStarted) {
        setTimer((prev) => prev + 0.01);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [isTimerStarted]);

  useEffect(() => {
    initializeGame();
  }, [gameLevel]);

  return {
    displayCards,
    nextNumber,
    timer,
    handleCardClick,
    initializeGame,
  };
};
