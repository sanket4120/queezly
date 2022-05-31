import { v4 as uuid } from 'uuid';

export const quiz = [
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/svj/image/upload/v1652544628/react_wrpakh.png',
    category: 'programming',
    title: 'The React Quizz',
    quiz: [
      {
        _id: uuid(),
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        options: [
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: true },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        options: [
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: true },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        options: [
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: true },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
        ],
      },
      {
        _id: uuid(),
        question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        options: [
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: true },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
          { _id: uuid(), option: 'Lorem ipsum dolor sit', isCorrect: false },
        ],
      },
    ],
  },
];
