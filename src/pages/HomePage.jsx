import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import HeroImage from '../assets/Hero.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function HomePage() {
  return (
    <HomeLayout>
      <header className='h-screen bg-cyan-200 pt-16'>
        <div className='item container flex items-center justify-around'>
          <section className='w-1/2 max-w-md'>
            <h2 className='text-6xl font-bold'>Tracking Belajar mu! Bersama Kami.</h2>
            <p className=' py-5 font-semibold'>
              Belajar mudah dengan adanya fitur - fitur yang dapat membantu-mu memahami bagaimana progress belajar mu
              selama ini.
            </p>
            <Link to='/login'>
              <Button>Get Started</Button>
            </Link>
          </section>
          <section className='w-1/2'>
            <img className='mx-auto h-[600px]' src={HeroImage} alt='hero-img' />
          </section>
        </div>
      </header>
    </HomeLayout>
  );
}
