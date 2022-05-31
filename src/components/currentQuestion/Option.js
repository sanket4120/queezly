import React from 'react';

const Option = ({ option, background }) => {
  const bgColor = background ? background : 'light';

  return (
    <li className='list-item my-1' key={option.id}>
      <input type='radio' className='hide' id={option.id} name='ans' />
      <label
        className={`label fw-normal w-100  rounded px-2 py-2 option bg-${bgColor}`}
        htmlFor={option.id}
      >
        {option.option}
      </label>
    </li>
  );
};

export default Option;
