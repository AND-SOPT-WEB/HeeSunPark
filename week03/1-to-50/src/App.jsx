import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyle';
import Header from './components/Header';
import GameBoard from './components/GameBoard';

function App() {
  const [timer, setTimer] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameLevel, setGameLevel] = useState('level1'); // 기본 레벨 설정

  // 타이머 시작 및 종료를 담당하는 함수들
  const startGame = () => {
    setIsGameActive(true);
  };

  const stopGame = () => {
    setIsGameActive(false);
    alert(`게임 종료! 걸린 시간: ${timer.toFixed(2)}초`);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        gameLevel={gameLevel}
        setGameLevel={setGameLevel}
        timer={timer}
        isGameActive={isGameActive}
      />
      <GameBoard
        gameLevel={gameLevel}
        startGame={startGame}
        stopGame={stopGame}
        setTimer={setTimer}
      />
    </ThemeProvider>
  );
}

export default App;
