import useTimer from 'easytimer-react-hook';
import { useState, createContext, useContext, useEffect } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timer, isTargetAchieved] = useTimer();

  const [isPaused, setIsPaused] = useState(timer.isPaused());
  const [isRunning, setIsRunning] = useState(timer.isRunning());
  const [timeValues, setTimeValues] = useState();

  const startTimer = (startValues) => {
    timer.start({ startValues: startValues, countdown: true });
  };
  const pauseTimer = () => {
    timer.pause();
    setIsPaused(true);
  };

  const resumeTimer = () => {
    console.log(isPaused);

    if (isPaused) {
      timer.start();
      setIsPaused(false);
    }
  };

  const toggleTimer = () => {
    console.log('isPaused', isPaused);
    console.log('timer.isPaused', timer.isPaused());

    if (isPaused) {
      resumeTimer();
    } else {
      pauseTimer();
    }
  };

  useEffect(() => {
    setTimeValues(timer.getTimeValues());
  }, [timer.getTimeValues()]);

  useEffect(() => {
    setIsRunning(timer.isRunning());
  }, [timer.isRunning()]);

  // useEffect(() => {
  //   console.log('Paused useEffect');

  //   setIsPaused(timer.isPaused());
  // }, [timer.isPaused()]);

  return (
    <TimerContext.Provider
      value={{
        timeValues,
        startTimer,
        pauseTimer,
        toggleTimer,
        resumeTimer,
        isPaused,
        pauseTimer,
        isRunning,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error('useTimerContext must be used within a TimerProvider');
  }
  return context;
};
