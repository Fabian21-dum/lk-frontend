import React from 'react';
import PropTypes from 'prop-types';
import RootLayout from './RootLayout';
import Navbar from '../components/Navbar';

export default function HomeLayout({ children }) {
  return (
    <RootLayout>
      <Navbar />
      {children}
    </RootLayout>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
