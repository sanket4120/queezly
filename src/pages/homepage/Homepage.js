import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../utils/useDocumentTitle';
import './homepage.css';

const Homepage = () => {
  useDocumentTitle('Queezly');

  return (
    <main className='grid hero-container'>
      <div className='col-12 col-sm-7 col-md-6 col-lg-5 hero-content flex flex-column justify-content-center align-items-center txt-center'>
        <h2 className='size-1 mb-3'>Queezly</h2>
        <p className='size-4 mb-3'>Test your skills and become a master</p>
        <Link to='/category' className='btn btn-primary'>
          Start Solving
        </Link>
      </div>

      <div className='col-12 col-sm-5 col-md-6 col-lg-7 hero-image'>
        <img
          src='/assets/Questions-cuate.svg'
          alt='Question'
          className='contain'
        />
      </div>
    </main>
  );
};

export { Homepage };
