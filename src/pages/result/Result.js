import { Navigate } from 'react-router-dom';
import { Option } from '../../components/currentQuestion/Option';
import { Question } from '../../components/currentQuestion/Question';
import { useQuiz } from '../../context/quizContext';
import { getScore } from '../../utils/resultUtils';
import { useDocumentTitle } from '../../utils/useDocumentTitle';
import './result.css';

const Result = () => {
  useDocumentTitle('Queezly | Result');

  const {
    currentQuizState: { currentQuiz },
  } = useQuiz();
  const { score, total } = getScore(currentQuiz);

  return (
    <>
      {currentQuiz ? (
        <main className='container py-6 result-container'>
          <div className='mb-6 txt-center'>
            <h1 className='size-2'>Your Score</h1>
            <p className='size-3 txt-primary'>
              {score} / {total}
            </p>
          </div>

          <h4 className='size-4 txt-center mb-5 txt-underline'>
            Check Answers
          </h4>

          <section>
            {currentQuiz.questions.map((question, index) => (
              <div key={question._id} className='mb-6'>
                <Question
                  question={question.question}
                  questionIndex={index + 1}
                  quizLength={currentQuiz.questions.length}
                />
                {!question.selectedOptionId && (
                  <p className='txt-danger txt-center fw-medium'>
                    option not selected
                  </p>
                )}
                <ul className='list-unstyled txt-center'>
                  {question.options.map((option) => (
                    <Option
                      option={option}
                      key={option._id}
                      background={
                        option.isCorrect
                          ? 'success'
                          : option._id === question.selectedOptionId && 'danger'
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

export { Result };
