// cardUtil.js

export const generateShuffledCards = (firstSet, secondSet) => {
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

export const updateDisplayCards = (
  displayCards,
  firstSet,
  secondCards,
  index
) => {
  const newDisplayCards = [...displayCards];
  const clickedNumber = displayCards[index];

  if (clickedNumber <= firstSet) {
    newDisplayCards[index] = secondCards[index];
  } else {
    newDisplayCards[index] = ''; // 빈 값으로 설정하여 카드 숨기기
  }

  return newDisplayCards;
};

export const getGridColumns = (gameLevel) => {
  return gameLevel === 'level1'
    ? 'repeat(3, 1fr)'
    : gameLevel === 'level2'
    ? 'repeat(4, 1fr)'
    : 'repeat(5, 1fr)';
};

export const initializeGame = (firstSet, secondSet) => {
  return generateShuffledCards(firstSet, secondSet);
};

export const resetGame = (
  firstSet,
  secondSet,
  setFirstCards,
  setSecondCards,
  setDisplayCards,
  setNextNumber,
  setTimer,
  stopGame
) => {
  const { shuffledFirstNumbers, shuffledSecondNumbers } = generateShuffledCards(
    firstSet,
    secondSet
  );

  setFirstCards(shuffledFirstNumbers);
  setSecondCards(shuffledSecondNumbers);
  setDisplayCards(shuffledFirstNumbers);
  setNextNumber(1);
  setTimer(0);
  stopGame();
};

export const handleCardClick = (
  number,
  index,
  nextNumber,
  firstSet,
  secondCards,
  setDisplayCards,
  setNextNumber,
  resetGame
) => {
  if (number !== nextNumber) {
    alert(`${nextNumber}을 클릭해주세요.`);
    return;
  }

  if (number === secondCards.length + firstSet) {
    // 종료 조건을 secondSet의 길이로 설정
    resetGame(); // 게임을 재설정합니다.
    return;
  }

  setDisplayCards((prevDisplayCards) =>
    updateDisplayCards(prevDisplayCards, firstSet, secondCards, index)
  );
  setNextNumber((prev) => prev + 1);
};
