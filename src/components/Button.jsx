import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children }) {
  return (
    <button className='relative rounded-xl bg-slate-900 px-7 py-4 text-lg font-bold text-slate-100'>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
