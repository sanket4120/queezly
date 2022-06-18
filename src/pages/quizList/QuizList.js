import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizByCategory } from '../../actions/quizActions';
import { QuizCard } from '../../components/cards/QuizCard';
import { Loader } from '../../components/loader/Loader';
import { useQuiz } from '../../context/quizContext';
import { useDocumentTitle } from '../../utils/useDocumentTitle';

const QuizList = () => {
  useDocumentTitle('Queezly | Quiz');

  const { categoryId } = useParams();
  const {
    setQuiz,
    quizState: { loading, quiz },
  } = useQuiz();

  useEffect(() => {
    if (categoryId) {
      getQuizByCategory(categoryId, setQuiz);
    }
  }, [categoryId, setQuiz]);

  return (
    <>
      {loading && <Loader />}
      {!loading && quiz && (
        <main className='py-6'>
          <h1 className='mb-5 size-2 txt-center'>Select Quiz</h1>

          <section className='grid gap-2'>
            {quiz.map((quiz) => (
              <div
                className='col-12 col-xs-6 col-lg-4 flex flex-column'
                key={quiz._id}
              >
                <QuizCard quiz={quiz} />
              </div>
            ))}
          </section>
        </main>
      )}
    </>
  );
};

export { QuizList };
