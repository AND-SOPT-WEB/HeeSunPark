import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyle';
import Header from './components/Header/Header';
import GameBoard from './components/CardGame/GameBoard';
import RankingBoard from './components/Ranking/RankingBoard';
import Modal from './components/Modal/Modal';
import { useTimer } from './utils/timer';
import { saveGameData, loadGameData } from './utils/storage';
import styled from '@emotion/styled';

function App() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isRankingMode, setIsRankingMode] = useState(false);
  const [gameLevel, setGameLevel] = useState('level1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTimer, setCurrentTimer] = useState(0);
  const { timer, setTimer, resetTimer } = useTimer(isGameActive);

  const startGame = () => setIsGameActive(true);

  const stopGame = () => {
    setIsGameActive(false);
    const formattedTimer = timer.toFixed(2);
    setCurrentTimer(formattedTimer);
    setIsModalOpen(true);

    const gameData = {
      level: gameLevel,
      timeTaken: formattedTimer,
      endTime: new Date().toLocaleString(),
    };

    // 저장 기능 호출
    saveGameData(gameData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetTimer();
  };

  useEffect(() => {
    if (isRankingMode) {
      resetTimer();
      setIsGameActive(false);
    }
  }, [isRankingMode]);

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
