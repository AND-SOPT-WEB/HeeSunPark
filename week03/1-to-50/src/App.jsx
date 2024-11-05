import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyle';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import RankingBoard from './components/RankingBoard';
import Modal from './components/Modal';
import { useTimer } from './utils/timer';
import styled from '@emotion/styled';

function App() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isRankingMode, setIsRankingMode] = useState(false);
  const [gameLevel, setGameLevel] = useState('level1');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [currentTimer, setCurrentTimer] = useState(0); // currentTimer 상태 추가
  const { timer, setTimer, resetTimer } = useTimer(isGameActive);

  // 타이머 시작 함수
  const startGame = () => setIsGameActive(true);

  // 게임 종료 함수
  const stopGame = () => {
    setIsGameActive(false);
    const formattedTimer = timer.toFixed(2); // 현재 타이머 값을 포맷
    setCurrentTimer(formattedTimer); // currentTimer 상태 업데이트
    setIsModalOpen(true);

    const gameData = {
      level: gameLevel,
      timeTaken: formattedTimer,
      endTime: new Date().toLocaleString(),
    };

    const existingData = localStorage.getItem('gameData');
    let gameDataArray = [];

    if (existingData) {
      try {
        gameDataArray = JSON.parse(existingData);
        if (!Array.isArray(gameDataArray)) {
          gameDataArray = [];
        }
      } catch (error) {
        console.error('Failed to parse existing game data:', error);
        gameDataArray = [];
      }
    }

    gameDataArray.push(gameData);
    localStorage.setItem('gameData', JSON.stringify(gameDataArray));
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
    resetTimer(); // 모달을 닫을 때 타이머 초기화
  };

  // 랭킹 모드 변경 시 타이머와 게임 실행 상태 초기화
  useEffect(() => {
    if (isRankingMode) {
      resetTimer();
      setIsGameActive(false);
    }
  }, [isRankingMode]);

  // gameLevel 변경 시 타이머와 게임 실행 상태 초기화
  useEffect(() => {
    resetTimer();
    setIsGameActive(false);
  }, [gameLevel]);

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
          <RankingBoard />
        ) : (
          <GameBoard
            gameLevel={gameLevel}
            startGame={startGame}
            stopGame={stopGame}
            setTimer={setTimer}
            isGameActive={isGameActive}
          />
        )}
      </MainContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message={`소요 시간: ${currentTimer}초입니다 !`}
      />
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
