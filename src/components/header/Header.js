import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import './header.css';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const {
    authState: { isAuthenticated },
  } = useUser();

  return (
    <header>
      <nav className='navbar txt-center container'>
        <div className='navbar-brand'>
          <div className='nav-item'>
            <h3>
              <NavLink to='/'>Queezly</NavLink>
            </h3>
          </div>
        </div>
        <ul
          className={`navbar-menu ${showNav && 'translate-x-0'}`}
          id='sidemenu'
        >
          <li className='navbar-item'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/category'>Categories</NavLink>
          </li>
          {isAuthenticated ? (
            <li className='navbar-item'>
              <NavLink to='/account'>My Account</NavLink>
            </li>
          ) : (
            <li className='navbar-item btn btn-outline-primary'>
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
        </ul>
        <div
          className='navbar-toggler navbar-item'
          id='navbar-toggler'
          data-toggle='#sidemenu'
          onClick={() => setShowNav((prevState) => !prevState)}
        >
          <i className='fa-solid fa-bars icon'></i>
        </div>
      </nav>
    </header>
  );
};

export { Header };
