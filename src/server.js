import { Server, Model, RestSerializer } from 'miragejs';
import {
  loginHandler,
  signupHandler,
} from './backend/controllers/AuthController';
import { getAllCategoriesHandler } from './backend/controllers/CategoryController';
import {
  getAllQuizHandler,
  getQuizHandler,
  getQuizByCategory,
} from './backend/controllers/QuizController';
import {
  addResult,
  getResults,
  getUserResults,
} from './backend/controllers/ResultController';

import { categories } from './backend/db/categories';
import { quiz } from './backend/db/quiz';
import { users } from './backend/db/users';
import { results } from './backend/db/results';

export function makeServer({ environment = 'development' } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      quiz: Model,
      category: Model,
      user: Model,
      result: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      quiz.forEach((item) => {
        server.create('quiz', { ...item });
      });

      users.forEach((item) => server.create('user', { ...item }));
      categories.forEach((item) => server.create('category', { ...item }));
      results.forEach((item) => server.create('result', { ...item }));
    },

    routes() {
      this.namespace = 'api';
      // auth routes (public)
      this.post('/auth/signup', signupHandler.bind(this));
      this.post('/auth/login', loginHandler.bind(this));

      // products routes (public)
      this.get('/quiz', getAllQuizHandler.bind(this));
      this.get('/quiz/:quizId', getQuizHandler.bind(this));

      // categories routes (public)
      this.get('/category', getAllCategoriesHandler.bind(this));
      this.get('/category/:categoryId', getQuizByCategory.bind(this));

      // results route (private)
      this.post('/results', addResult.bind(this));
      this.get('/results', getResults.bind(this));
      this.get('/results/:userId', getUserResults.bind(this));
    },
  });
}
