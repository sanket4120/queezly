const getScore = (currentQuiz) => {
  const total = currentQuiz.questions.length * 10;
  let score = 0;
  currentQuiz.questions.forEach((question) => {
    for (const option of question.options) {
      if (question.selectedOptionId === option._id && option.isCorrect)
        score += 10;
    }
  });

  return { total, score };
};

export { getScore };
