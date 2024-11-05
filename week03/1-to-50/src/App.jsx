import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyle';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import RankingBoard from './components/RankingBoard';
import { useTimer } from './utils/timer';
import styled from '@emotion/styled';

function App() {
  const [isGameActive, setIsGameActive] = useState(false); // 타이머 실행을 위한 변수
  const [isRankingMode, setIsRankingMode] = useState(false); // 랭킹 모드
  const [gameLevel, setGameLevel] = useState('level1'); // 기본 레벨 설정
  const { timer, setTimer, resetTimer } = useTimer(isGameActive);

  // 타이머 시작 및 종료를 담당하는 함수들
  const startGame = () => setIsGameActive(true);

  const stopGame = () => {
    setIsGameActive(false);
    alert(`게임 종료! 걸린 시간: ${timer.toFixed(2)}초`);

    // 게임 정보 객체 생성
    const gameData = {
      level: gameLevel,
      timeTaken: timer.toFixed(2),
      endTime: new Date().toLocaleString(), // 현재 시각
    };

    // 기존 데이터를 가져오기
    const existingData = localStorage.getItem('gameData');
    let gameDataArray = [];

    // 기존 데이터가 있으면 파싱하여 배열에 추가
    if (existingData) {
      try {
        gameDataArray = JSON.parse(existingData);
        // 기존 데이터가 배열이 아닐 경우 빈 배열로 초기화
        if (!Array.isArray(gameDataArray)) {
          gameDataArray = [];
        }
      } catch (error) {
        console.error('Failed to parse existing game data:', error);
        // 파싱 실패 시, 빈 배열로 초기화
        gameDataArray = [];
      }
    }

    // 새로운 게임 데이터를 배열에 추가
    gameDataArray.push(gameData);

    // 로컬 스토리지에 전체 배열 저장
    localStorage.setItem('gameData', JSON.stringify(gameDataArray));

    resetTimer();
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        gameLevel={gameLevel}
        setGameLevel={setGameLevel}
        timer={timer}
        isRankingMode={isRankingMode}
        setIsRankingMode={setIsRankingMode}
      />
      <MainContainer>
        {isRankingMode ? (
          <RankingBoard /> // 랭킹 모드일 경우 랭킹 보드 렌더링
        ) : (
          <GameBoard
            gameLevel={gameLevel}
            startGame={startGame}
            stopGame={stopGame}
            setTimer={setTimer}
          />
        )}
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
`;
