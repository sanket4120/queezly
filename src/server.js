import { Server, Model, RestSerializer } from 'miragejs';
import {
  loginHandler,
  signupHandler,
} from './backend/controllers/AuthController';
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from './backend/controllers/CategoryController';
import {
  getAllQuizHandler,
  getQuizHandler,
} from './backend/controllers/QuizController';
import { categories } from './backend/db/categories';
import { quiz } from './backend/db/quiz';
import { users } from './backend/db/users';

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
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      quiz.forEach((item) => {
        server.create('quiz', { ...item });
      });

      users.forEach((item) =>
        server.create('user', { ...item, cart: [], wishlist: [] })
      );

      categories.forEach((item) => server.create('category', { ...item }));
    },

    routes() {
      this.namespace = 'api';
      // auth routes (public)
      this.post('/auth/signup', signupHandler.bind(this));
      this.post('/auth/login', loginHandler.bind(this));

      // products routes (public)
      this.get('/products', getAllQuizHandler.bind(this));
      this.get('/products/:productId', getQuizHandler.bind(this));

      // categories routes (public)
      this.get('/categories', getAllCategoriesHandler.bind(this));
      this.get('/categories/:categoryId', getCategoryHandler.bind(this));
    },
  });
}
