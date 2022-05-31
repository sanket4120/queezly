import { Response } from 'miragejs';

/*
 * send GET Request at /api/quiz
 */

export const getAllQuizHandler = function () {
  return new Response(200, {}, { products: this.db.quiz });
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/quiz/:quizId
 * */

export const getQuizHandler = function (schema, request) {
  const quizId = request.params.quizId;
  try {
    const quiz = schema.quiz.findBy({ _id: quizId });
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
