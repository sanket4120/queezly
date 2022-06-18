import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

export const results = [
  {
    _id: uuid(),
    score: 50,
    category: 'movies',
    username: 'John Doe',
    createdAt: formatDate(),
  },
  {
    _id: uuid(),
    score: 40,
    category: 'technology',
    username: 'Adarsh Balika',
    createdAt: formatDate(),
  },
  {
    _id: uuid(),
    score: 40,
    category: 'programming',
    username: 'John Doe',
    createdAt: formatDate(),
  },
  {
    _id: uuid(),
    score: 30,
    category: 'history',
    username: 'Adarsh Balika',
    createdAt: formatDate(),
  },
];
