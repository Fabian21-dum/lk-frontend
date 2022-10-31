import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Outlet } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
