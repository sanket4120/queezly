import React from 'react';
import './rules.css';

const Rules = ({ startQuiz, duration }) => {
  return (
    <main className='py-6'>
      <h3 className='mb-5 size-3 txt-center'>Rules</h3>
      <ul className='list-unstyled mb-5 rules-container border rounded mx-auto p-3'>
        <li>
          <i className='fa-solid fa-angle-right mr-2'></i>
          Each correct answer scores 10 points
        </li>
        <li>
          <i className='fa-solid fa-angle-right mr-2'></i>Wrong answer scores 0
          points
        </li>
        <li>
          <i className='fa-solid fa-angle-right mr-2'></i>Total duration of the
          quiz will be {duration} min
        </li>
        <li>
          <i className='fa-solid fa-angle-right mr-2'></i>Each multiple choice
          question has only one correct answer
        </li>
      </ul>

      <div className='txt-center'>
        <button className='btn btn-primary' onClick={startQuiz}>
          Lets Start
        </button>
      </div>
    </main>
  );
};

export { Rules };
