import React from 'react';
import PropTypes from 'prop-types';
import RootLayout from './RootLayout';
import SideBar from '../components/Sidebar';
import NavDashboard from '../components/NavDashboard';

export default function DashboardLayout({ children }) {
  return (
    <RootLayout>
      <div className='lg:hidden'>
        <NavDashboard />
        {children}
      </div>
      <div className='hidden lg:flex'>
        <SideBar />
        {/* <DashboardNavBar /> */}
        {children}
      </div>
    </RootLayout>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
