import React from 'react';
import { SELECT_OPTION } from '../../constants/quizConstants';
import { useQuiz } from '../../context/quizContext';

const Option = ({ option, background }) => {
  const bgColor = background ? background : 'light';
  const { setCurrentQuiz } = useQuiz();

  return (
    <li
      className='list-item my-1'
      onClick={() =>
        setCurrentQuiz({ type: SELECT_OPTION, payload: option._id })
      }
    >
      <input type='radio' className='hide' id={option._id} name='ans' />
      <label
        className={`label fw-normal w-100  rounded px-2 py-2 option bg-${bgColor}`}
        htmlFor={option._id}
      >
        {option.option}
      </label>
    </li>
  );
};

export { Option };
