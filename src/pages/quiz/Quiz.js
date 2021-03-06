import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getQuiz } from '../../actions/quizActions';
import { Option } from '../../components/currentQuestion/Option';
import { Question } from '../../components/currentQuestion/Question';
import { useQuiz } from '../../context/quizContext';
import { Loader } from '../../components/loader/Loader';
import { Rules } from '../rules/Rules';
import { Timer } from '../../components/timer/Timer';
import { useUser } from '../../context/userContext';
import { addResult } from '../../actions/resultActions';
import { getScore } from '../../utils/resultUtils';
import { useMessage } from '../../context/messageContext';
import { useDocumentTitle } from '../../utils/useDocumentTitle';
import {
  NEXT_QUESTION,
  PREVIOUS_QUESTION,
} from '../../constants/quizConstants';
import './quiz.css';

const Quiz = () => {
  useDocumentTitle('Queezly | Play');

  const { quizId } = useParams();
  const navigate = useNavigate();
  const {
    currentQuizState: { loading, currentQuiz, currentQuestionIndex },
    setCurrentQuiz,
  } = useQuiz();
  const time = useRef();
  const [showRules, setShowRules] = useState(true);
  const {
    authState: { userInfo },
  } = useUser();
  const { setMessages } = useMessage();

  useEffect(() => {
    getQuiz(quizId, setCurrentQuiz);
  }, [quizId, setCurrentQuiz]);

  useEffect(() => {
    if (currentQuiz) {
      time.current = currentQuiz.duration * 60;
    }
  }, [currentQuiz]);

  const startQuiz = () => {
    setShowRules((prevState) => !prevState);
  };

  const submitQuiz = () => {
    const { score } = getScore(currentQuiz);

    const result = {
      score,
      userId: userInfo._id,
      username: `${userInfo.firstName} ${userInfo.lastName}`,
      category: currentQuiz.category,
      quiz: currentQuiz.title,
    };

    addResult(result, setMessages);

    navigate('/result', { replace: true });
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && currentQuiz && showRules && (
        <Rules startQuiz={startQuiz} duration={currentQuiz.duration} />
      )}
      {!loading && currentQuiz && !showRules && (
        <main className='py-6 mx-auto quiz-container'>
          <div className='flex justify-content-between align-items-center mb-6'>
            <h1 className='txt-capitalize'>{currentQuiz.title}</h1>
            <span className='size-5 ml-2'>
              <Timer time={time} submitQuiz={submitQuiz} />
            </span>
          </div>

          <section>
            {currentQuiz?.questions && (
              <div className='mb-5'>
                <Question
                  question={
                    currentQuiz.questions[currentQuestionIndex].question
                  }
                  questionIndex={currentQuestionIndex + 1}
                  quizLength={currentQuiz.questions.length}
                />
                <ul className='list-unstyled txt-center'>
                  {currentQuiz.questions[currentQuestionIndex].options.map(
                    (option) => (
                      <Option
                        option={option}
                        key={option._id}
                        background={
                          option._id ===
                            currentQuiz.questions[currentQuestionIndex]
                              .selectedOptionId && 'primary'
                        }
                      />
                    )
                  )}
                </ul>
              </div>
            )}
          </section>

          <div className='flex justify-content-between'>
            <button
              className={`btn btn-secondary ${
                currentQuestionIndex <= 0 && 'disabled'
              }`}
              onClick={() => setCurrentQuiz({ type: PREVIOUS_QUESTION })}
            >
              <i className='fa-solid fa-caret-left'></i> Previous
            </button>

            <button className='btn btn-secondary' onClick={submitQuiz}>
              Submit Quiz
            </button>

            <button
              className={`btn btn-primary ${
                currentQuestionIndex + 1 === currentQuiz.questions.length &&
                'disabled'
              }`}
              onClick={() => setCurrentQuiz({ type: NEXT_QUESTION })}
            >
              Next <i className='fa-solid fa-caret-right'></i>
            </button>
          </div>
        </main>
      )}
    </>
  );
};

export { Quiz };
