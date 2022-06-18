import { useRef, useEffect, useState } from 'react';
import { getFormattedTime } from '../../utils/timerUtils';

const Timer = ({ time, submitQuiz }) => {
  const [timer, setTimer] = useState('00:00');
  const intervalRef = useRef();

  useEffect(() => {
    const updateTimer = () => {
      let formttedTime = getFormattedTime(time.current);
      time.current--;
      setTimer(formttedTime);
    };

    intervalRef.current = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [time]);

  if (time.current < 0) {
    submitQuiz();
  }

  return (
    <>
      <i className='fa-regular fa-clock'></i> {timer}
    </>
  );
};

export { Timer };
