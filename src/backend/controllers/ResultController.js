import { Response } from 'miragejs';
import { v4 as uuid } from 'uuid';
import { requiresAuth } from '../utils/authUtils';
import { formatDate } from '../utils/authUtils';

// get all the results
export const getResults = function (schema, request) {
  const isUserId = requiresAuth.call(this, request);
  if (!isUserId) {
    return new Response(
      404,
      {},
      {
        errors: ['The email you entered is not Registered. Not Found error'],
      }
    );
  }

  return new Response(200, {}, { results: schema.db.results });
};

export const getUserResults = function (schema, request) {
  const userId = request.params.userId;
  const isUserId = requiresAuth.call(this, request);
  if (!isUserId) {
    return new Response(
      404,
      {},
      {
        errors: ['The email you entered is not Registered. Not Found error'],
      }
    );
  }

  try {
    const results = schema.db.results.filter(
      (result) => result.userId === userId
    );

    return new Response(200, {}, results);
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

export const addResult = function (schema, request) {
  const isUserId = requiresAuth.call(this, request);
  if (!isUserId) {
    return new Response(
      404,
      {},
      {
        errors: ['The email you entered is not Registered. Not Found error'],
      }
    );
  }
  const { result } = JSON.parse(request.requestBody);

  schema.db.results.insert({
    _id: uuid(),
    ...result,
    createdAt: formatDate(),
  });
  return new Response(200, {}, { results: schema.db.results });
};
