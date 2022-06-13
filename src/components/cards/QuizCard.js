import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const QuizCard = ({ quiz }) => {
  return (
    <div className='card flex-grow-1'>
      <img
        src={quiz.image}
        alt={quiz.title}
        className='card-image cover rounded'
      />
      <div className='card-body'>
        <h3 className='card-title'>{quiz.title}</h3>
        <p>{quiz.description}</p>
        <ul className='list-unstyled mt-2'>
          <li>
            <i className='fa-regular fa-circle-question mr-2'></i>
            {quiz.questions.length} Questions
          </li>
          <li>
            <i className='fa-regular fa-clock mr-2'></i>
            {quiz.duration} min
          </li>
        </ul>
      </div>
      <div className='card-footer'>
        <Link
          to={`/quiz/${quiz._id}`}
          className='btn btn-primary w-100 txt-center'
        >
          Take Quiz
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;
