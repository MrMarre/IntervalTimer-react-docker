import useTimer from 'easytimer-react-hook';
import { useState, createContext, useContext, useEffect } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timer, isTargetAchieved] = useTimer({
    updateWhenTargetAchieved: true,
  });

  const [isPaused, setIsPaused] = useState(timer.isPaused());
  const [isRunning, setIsRunning] = useState(timer.isRunning());

  const [timeValues, setTimeValues] = useState();

  const [isAchieved, setIsAchieved] = useState();

  const startTimer = (startValues) => {
    if (timer.isPaused()) {
      timer.start();
    } else {
      timer.start({
        startValues: startValues,
        countdown: true,
        updateWhenTargetAchieved: true,
      });
    }
    setIsPaused(timer.isPaused);
  };

  const pauseTimer = () => {
    timer.pause();
    setIsPaused(true);
  };

  const stopTimer = () => {
    timer.stop();
    setIsPaused(timer.isPaused());
    setIsAchieved(timer.isRunning());
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

  useEffect(() => {
    if (isTargetAchieved != undefined && isTargetAchieved == true) {
      setIsAchieved(isTargetAchieved);
    }
  }, [isTargetAchieved]);

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

        isAchieved,
        isTargetAchieved,
        stopTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error('useTimerContext must be used within the TimerProvider');
  }
  return context;
};
