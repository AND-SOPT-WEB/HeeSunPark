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
