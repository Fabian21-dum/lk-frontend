import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <HomeLayout>
      <header className='h-screen bg-cyan-200'>
        <Navbar />
        <div className='container flex'>
          <section>
            <h1 className='text-5xl font-bold'>Tracking Belajar mu! Bersama Kami</h1>
          </section>
          <section>{/* hero image */}</section>
        </div>
      </header>
    </HomeLayout>
  );
}
