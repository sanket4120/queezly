import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const CategoryCard = ({ category }) => {
  return (
    <div className='card flex-grow-1'>
      <Link to='/quizlist'>
        <div className='overlay-container'>
          <img
            src={category.image}
            alt={category.categoryName}
            className='card-image cover rounded'
            loading='lazy'
          />
          <div className='overlay align-self-center bg-primary'>
            <span className='size-5 txt-capitalize'>
              {category.categoryName}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
