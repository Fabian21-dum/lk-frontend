import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import HeroImage from '../assets/Hero.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import LogoSTMIKWICIDA from '../assets/Logo_STMIK_WICIDA.png';
import LogoLOKreatif from '../assets/Logo_LO_KREATIF.png';
import LogoAptisi from '../assets/Logo_APTISI.png';

export default function HomePage() {
  return (
    <HomeLayout>
      <header className='h-[800px] bg-gradient-to-b from-cyan-400 px-4 pt-16'>
        <div className='item container flex items-center justify-between'>
          <section className='w-1/2 max-w-md'>
            <h2 className='text-6xl font-bold'>Tracking Belajar mu! Bersama Kami</h2>
            <p className=' py-5 font-semibold'>
              Belajar mudah dengan adanya fitur - fitur yang dapat membantu-mu memahami bagaimana progress belajar mu
              selama ini
            </p>
            <Link to='/login'>
              <Button>Get Started</Button>
            </Link>
          </section>
          <section className='w-1/2'>
            <img className='mx-auto h-[564px]' src={HeroImage} alt='hero-img' />
          </section>
        </div>
      </header>
      {/* partnership section */}
      <section className='my-10'>
        <h1 className='my-8 text-center text-4xl font-bold'>Partnership</h1>
        <div className='flex justify-center gap-x-10'>
          <img className='h-[96px]' src={LogoSTMIKWICIDA} alt='Logo STMIK WICIDA' />
          <img className='h-[96px]' src={LogoLOKreatif} alt='Logo STMIK WICIDA' />
          <img className='h-[96px]' src={LogoAptisi} alt='Logo STMIK WICIDA' />
        </div>
      </section>
    </HomeLayout>
  );
}
