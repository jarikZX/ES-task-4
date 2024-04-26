import { useEffect, useState } from 'react';

export const CouldowwnTimer = () => {
    const [timer, setTimer] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        } else {
          return prevTime - 1; 
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Countdown Timer: {timer}</h1>
    </div>
  );
}
