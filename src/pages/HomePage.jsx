import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import HeroImage from '../assets/image/Hero.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
<<<<<<< HEAD
import LogoSTMIKWICIDA from '../assets/image/Logo_STMIK_WICIDA.png';
import LogoLOKreatif from '../assets/image/Logo_LO_KREATIF.png';
import LogoAptisi from '../assets/image/Logo_APTISI.png';
=======
import LogoSTMIKWICIDA from '../assets/Logo_STMIK_WICIDA.png';
import LogoLOKreatif from '../assets/Logo_LO_KREATIF.png';
import LogoAptisi from '../assets/Logo_APTISI.png';
import VectorImage1 from '../assets/Vector1.svg';
import VectorImage2 from '../assets/Vector2.svg';
>>>>>>> 7510d7fc7ab4b8485d44808e4570c30ef83cf8d8

export default function HomePage() {
  return (
    <HomeLayout>
      <header className='h-[900px] bg-gradient-to-b from-cyan-300 px-4 pt-16 sm:h-[800px]'>
        <div className='container  flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between'>
          <div className='w-full md:max-w-md lg:w-1/2'>
            <h2 className='py-5 text-5xl font-bold lg:text-6xl'>Tracking Belajar mu! Bersama Kami</h2>
            <p className='pb-5 font-semibold md:text-lg'>
              Belajar mudah dengan adanya fitur - fitur yang dapat membantu-mu memahami bagaimana progress belajar mu
              selama ini
            </p>
            <Link to='/login'>
              <Button>Get Started</Button>
            </Link>
          </div>
          <div className='pt-10 xl:w-1/2'>
            <img className='w-35 mx-auto w-64 lg:h-[564px] lg:w-auto' src={HeroImage} alt='hero-img' />
          </div>
        </div>
      </header>
      {/* partnership section */}
      <section className=' my-14'>
        <h1 className='my-8 text-center text-4xl font-bold'>Partnership</h1>
        <div className='flex justify-center gap-x-10 lg:gap-x-12'>
          <img className='h-[68px] sm:h-24 lg:h-32' src={LogoSTMIKWICIDA} alt='Logo STMIK WICIDA' />
          <img className='h-[68px] sm:h-24 lg:h-32' src={LogoLOKreatif} alt='Logo STMIK WICIDA' />
          <img className='h-[68px] sm:h-24 lg:h-32' src={LogoAptisi} alt='Logo STMIK WICIDA' />
        </div>
      </section>
      <section className='bg bg-gradient-to-t from-cyan-300 px-4 pt-14 pb-6'>
        <div className='container flex flex-col items-center justify-evenly lg:flex-row'>
          <div className='w-full lg:w-1/2'>
            <img className='mx-auto w-96 lg:w-auto' src={VectorImage1} alt='vector-1' />
          </div>
          <div className='py-5 lg:w-1/2 lg:max-w-lg'>
            <h2 className='pb-5 text-4xl font-bold md:text-5xl lg:text-6xl'>Liat Keseharian Anda Dalam Belajar.</h2>
            <p className='font-semibold md:text-lg'>
              Proses belajar yang dapat di lacak adalah proses yang tentu akan membuat bagaimana pandagan pelajar
              sangatlah menarik dan menjadi sebuah kebangaan tertentu dalam melihat peroses belajarnya.
            </p>
          </div>
        </div>
      </section>
      <section className='h-36 bg-cyan-300 bg-zigzag bg-center bg-repeat-x py-4'></section>
      <section className='bg-gradient-to-b from-cyan-300 py-8'>
        <div className='container'>
          <h1 className='pt-8 text-center text-3xl font-bold'>Apa saja manfaat Tracking proses belajar? </h1>
          <div className='align-center flex'>
            <div className='w-2/3'></div>
            <div className='w-1/3'>
              <img src={VectorImage2} alt='' />
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}
