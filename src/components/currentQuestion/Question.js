const Question = ({ question, questionIndex, quizLength }) => {
  return (
    <div className='flex align-items-center mb-2 size-5'>
      <span className='btn btn-sm' style={{ whiteSpace: 'nowrap' }}>
        {questionIndex} / {quizLength}
      </span>
      <span className='ml-2'>{question}</span>
    </div>
  );
};

export { Question };
