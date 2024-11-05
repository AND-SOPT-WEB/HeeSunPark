// 게임 데이터를 로컬 스토리지에 저장
export const saveGameData = (gameData) => {
  let gameDataArray = [];
  const existingData = localStorage.getItem('gameData');

  if (existingData) {
    try {
      gameDataArray = JSON.parse(existingData) || [];
    } catch (error) {
      console.error('데이터 불러오기 실패', error);
      gameDataArray = [];
    }
  }

  gameDataArray.push(gameData);
  localStorage.setItem('gameData', JSON.stringify(gameDataArray));
};

// 로컬 스토리지에서 게임 데이터 불러오기
export const loadGameData = () => {
  const storedData = localStorage.getItem('gameData');
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

// 로컬 스토리지 초기화
export const resetGameData = () => {
  localStorage.removeItem('gameData');
};
