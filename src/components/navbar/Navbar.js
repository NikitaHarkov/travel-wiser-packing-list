import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/travelwiser-logo.svg';
import bell from '../../assets/ringbell.svg';
import './navbar.css';
import links from './navbar_links';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className='container'>
        <Link to='/'>
          <img className='navbar-logo' src={logo} alt='logo' />
        </Link>
        <ul>
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link
                  className={location.pathname === link.url ? 'active' : ''}
                  to={link.url}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}

          <button className='notification' type='button'>
            <img src={bell} alt='bell' />
          </button>
          <button className='user' type='button'>
            John Smith
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
