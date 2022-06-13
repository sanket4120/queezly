import { Navigate } from 'react-router-dom';
import Option from '../../components/currentQuestion/Option';
import Question from '../../components/currentQuestion/Question';
import { useQuiz } from '../../context/quizContext';
import './result.css';

const Result = () => {
  const questions = [
    {
      id: 111,
      question: 'What is the correct command to create a new React project?',
      options: [
        {
          id: 1,
          option: 'npx create-react-app appname',
          isSelected: false,
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
          isSelected: true,
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
  const {
    currentQuizState: { currentQuiz },
  } = useQuiz();

  return (
    <>
      {currentQuiz ? (
        <main className='container py-6 result-container'>
          <div className='mb-6 txt-center'>
            <h1 className='size-2'>Your Score</h1>
            <p className='size-3 txt-primary'>80 / 100</p>
          </div>

          <h4 className='size-4 txt-center mb-5 txt-underline'>
            Check Answers
          </h4>

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
                      key={option.id}
                      background={
                        option.isCorrect
                          ? 'success'
                          : option.isSelected && 'danger'
                      }
                    />
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </main>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default Result;
