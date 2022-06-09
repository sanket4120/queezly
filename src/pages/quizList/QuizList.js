import React from 'react';
import QuizCard from '../../components/cards/QuizCard';

const QuizList = () => {
  const quizList = [
    {
      id: 1,
      title: 'The react quiz',
      description: 'Lorem ipsum dolor sit amet consectetur',
      questionCount: 10,
      duration: 10,
      rating: 4.5,
      image:
        'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    },
    {
      id: 2,
      title: 'The react quiz',
      description: 'Lorem ipsum dolor sit amet consectetur',
      questionCount: 10,
      duration: 10,
      rating: 4.5,
      image:
        'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    },
    {
      id: 3,
      title: 'The react quiz',
      description: 'Lorem ipsum dolor sit amet consectetur',
      questionCount: 10,
      duration: 10,
      rating: 4.5,
      image:
        'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    },
    {
      id: 4,
      title: 'The react quiz',
      description: 'Lorem ipsum dolor sit amet consectetur',
      questionCount: 10,
      duration: 10,
      rating: 4.5,
      image:
        'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    },
    {
      id: 5,
      title: 'The react quiz',
      description: 'Lorem ipsum dolor sit amet consectetur',
      questionCount: 10,
      duration: 10,
      rating: 4.5,
      image:
        'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    },
    {
      id: 6,
      title: 'The react quiz',
      description: 'Lorem ipsum dolor sit amet consectetur',
      questionCount: 10,
      duration: 10,
      rating: 4.5,
      image:
        'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    },
    {
      id: 7,
      title: 'The react quiz',
      description: 'Lorem ipsum dolor sit amet consectetur',
      questionCount: 10,
      duration: 10,
      rating: 4.5,
      image:
        'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    },
    {
      id: 8,
      title: 'The react quiz',
      description: 'Lorem ipsum dolor sit amet consectetur',
      questionCount: 10,
      duration: 10,
      rating: 4.5,
      image:
        'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    },
  ];

  return (
    <main className='py-6'>
      <h1 className='mb-5 size-2 txt-center'>Select Quiz</h1>

      <section className='grid gap-2'>
        {quizList.map((quiz) => (
          <div
            className='col-12 col-xs-6 col-lg-4 flex flex-column'
            key={quiz.id}
          >
            <QuizCard quiz={quiz} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default QuizList;
