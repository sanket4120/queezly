import { Link } from 'react-router-dom';
import Option from '../../components/currentQuestion/Option';
import Question from '../../components/currentQuestion/Question';
import './quiz.css';

const Quiz = () => {
  const questions = [
    {
      id: 111,
      question: 'What is the correct command to create a new React project?',
      options: [
        {
          id: 1,
          option: 'npx create-react-app appname',
          isSelected: true,
          isCorrect: true,
        },
        {
          id: 2,
          option: 'npx install create-react-app',
          isSelected: false,
          isCorrect: false,
        },
        {
          id: 3,
          option: 'npx install create-react-app -g',
          isSelected: false,
          isCorrect: false,
        },
        {
          id: 4,
          option: 'install - l create-react-app',
          isSelected: false,
          isCorrect: false,
        },
      ],
    },
  ];

  return (
    <main className='py-6 mx-auto quiz-container'>
      <div className='flex justify-content-between align-items-center mb-6'>
        <h1>The React Quizz!</h1>
        <span className='size-5 ml-2'>
          <i className='fa-regular fa-clock'></i> 08 : 10
        </span>
      </div>

      <section>
        {questions.map((question, index) => (
          <div key={question.id} className='mb-5'>
            <Question
              question={question.question}
              questionIndex={index + 1}
              quizLength={questions.length}
            />
            <ul className='list-unstyled txt-center'>
              {question.options.map((option) => (
                <Option
                  option={option}
                  id={option.id}
                  background={option.isSelected && 'primary'}
                  key={option.id}
                />
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className='flex justify-content-between'>
        <Link to='/result' className='btn btn-secondary'>
          <i className='fa-solid fa-caret-left'></i> Previous
        </Link>
        <Link to='/result' className='btn btn-secondary'>
          Submit Quiz
        </Link>
        <Link to='/result' className='btn btn-primary'>
          Next <i className='fa-solid fa-caret-right'></i>
        </Link>
      </div>
    </main>
  );
};

export default Quiz;
