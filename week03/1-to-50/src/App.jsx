import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyle';
import Header from './components/Header';
import GameBoard from './components/GameBoard';

function App() {
  const [gameLevel, setGameLevel] = useState('level1'); // 기본 레벨 설정

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header gameLevel={gameLevel} setGameLevel={setGameLevel} />
      <GameBoard gameLevel={gameLevel} />
    </ThemeProvider>
  );
}

export default App;
