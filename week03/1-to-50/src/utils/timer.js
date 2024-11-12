// timer.js
import { useState, useEffect } from 'react';

export const useTimer = (isGameActive) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isGameActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 0.01);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isGameActive, setTimer]);

  const resetTimer = () => setTimer(0);

  return { timer, setTimer, resetTimer };
};
