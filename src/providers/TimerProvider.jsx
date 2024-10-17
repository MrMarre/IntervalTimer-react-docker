import useTimer from 'easytimer-react-hook';
import { useState, createContext, useContext, useEffect } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timer, isTargetAchieved] = useTimer({});

  const [isPaused, setIsPaused] = useState(timer.isPaused());
  const [isRunning, setIsRunning] = useState(timer.isRunning());
  const [timeValues, setTimeValues] = useState();

  useEffect(() => {
    setTimeValues(timer.getTimeValues());
  }, [timer.timeValues()]);

  const startTimer = (startValues) => {
    timer.start(startValues);
  };

  useEffect(() => {
    setIsRunning(timer.isRunning());
  }, [timer.isRunning()]);

  const pauseTimer = () => {
    timer.pause();
  };

  useEffect(() => {
    setIsPaused(timer.isPaused());
  }, [timer.isPaused()]);

  return (
    <TimerContext.Provider
      value={{ timeValues, startTimer, pauseTimer, isPaused, isRunning }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  useContext(TimerContext);
};
