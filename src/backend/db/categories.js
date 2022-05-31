import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'movies',
    image:
      'https://res.cloudinary.com/svj/image/upload/v1652541674/movies_u35yi1.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'technology',
    image:
      'https://res.cloudinary.com/svj/image/upload/v1652541674/technology_plfcs8.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'history',
    image:
      'https://res.cloudinary.com/svj/image/upload/v1652541674/history_pstz1r.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'programming',
    image:
      'https://res.cloudinary.com/svj/image/upload/v1652541674/programming_zjtsdg.jpg',
  },
];
