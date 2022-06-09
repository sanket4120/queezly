import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Category from './pages/category/Category';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import QuizList from './pages/quizList/QuizList';
import './App.css';
import Rules from './pages/rules/Rules';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/result/Result';
import Messages from './components/messages/Messages';
import GlobalProvider from './context/globalContext';
import Account from './pages/account/Account';
import AuthRequired from './components/authRequired/AuthRequired';

function App() {
  return (
    <div className='app'>
      <GlobalProvider>
        <Header />
        <div className='container relative'>
          <Messages />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/category' element={<Category />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/quizlist' element={<QuizList />} />
            <Route path='/' element={<AuthRequired />}>
              <Route path='rules' element={<Rules />} />
              <Route path='quiz' element={<Quiz />} />
              <Route path='result' element={<Result />} />
              <Route path='account' element={<Account />} />
            </Route>
          </Routes>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
