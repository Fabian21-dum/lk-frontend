import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Navbar({ isLogin }) {
  return (
    <nav className='container flex justify-between py-6'>
      <div>
        <Link className='text-2xl font-bold' to='/'>
          LOGOS
        </Link>
      </div>
      <div className='space-x-5'>
        {isLogin ? (
          'telah login'
        ) : (
          <>
            <Link className='font-bold' to='/register'>
              Register
            </Link>
            <Link className='rounded-full bg-slate-900 px-6 py-2  font-bold text-slate-50' to='/login'>
              Log In
            </Link>
          </>
        )}
      </div>
      {/* <div></div> */}
    </nav>
  );
}

Navbar.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
