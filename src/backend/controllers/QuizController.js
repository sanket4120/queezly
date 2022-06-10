import { Response } from 'miragejs';

/*
 * send GET Request at /api/quiz
 */

export const getAllQuizHandler = function () {
  return new Response(200, {}, { quiz: this.db.quizzes });
};

export const getQuizByCategory = function (schema, request) {
  const categoryId = request.params.categoryId;
  try {
    const category = schema.categories.findBy({ _id: categoryId });

    const allQuiz = this.db.quizzes;

    const quiz = allQuiz.filter(
      (quiz) =>
        quiz.category.toLowerCase() === category.categoryName.toLowerCase()
    );

    return new Response(200, {}, { quiz });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/quiz/:quizId
 * */

export const getQuizHandler = function (schema, request) {
  const quizId = request.params.quizId;
  try {
    const quiz = schema.quizzes.findBy({ _id: quizId });
    return new Response(200, {}, { quiz });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
