import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import HeroImage from '../assets/Hero.svg';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import LogoSTMIKWICIDA from '../assets/Logo_STMIK_WICIDA.png';
import LogoLOKreatif from '../assets/Logo_LO_KREATIF.png';
import LogoAptisi from '../assets/Logo_APTISI.png';
import VectorImage1 from '../assets/Vector1.svg';
import VectorImage2 from '../assets/Vector2.svg';
import ZigZag from '../assets/ZigZag.svg';

export default function HomePage() {
  return (
    <HomeLayout>
      <header className='h-[800px] bg-gradient-to-b from-cyan-300 px-4 pt-16'>
        <div className='container flex items-center justify-between'>
          <div className='w-1/2 max-w-md'>
            <h2 className='text-6xl font-bold'>Tracking Belajar mu! Bersama Kami</h2>
            <p className=' py-5 font-semibold'>
              Belajar mudah dengan adanya fitur - fitur yang dapat membantu-mu memahami bagaimana progress belajar mu
              selama ini
            </p>
            <Link to='/login'>
              <Button>Get Started</Button>
            </Link>
          </div>
          <div className='w-1/2'>
            <img className='mx-auto h-[564px]' src={HeroImage} alt='hero-img' />
          </div>
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
      <section className='bg bg-gradient-to-t from-cyan-300 pt-14 pb-6'>
        <div className='container flex items-center justify-evenly'>
          <div className='w-1/2'>
            <img src={VectorImage1} alt='vector-1' />
          </div>
          <div className='w-1/2 max-w-lg'>
            <h2 className='pb-5 text-6xl font-bold'>Liat Keseharian Anda Dalam Belajar.</h2>
            <p className='font-semibold'>
              Proses belajar yang dapat di lacak adalah proses yang tentu akan membuat bagaimana pandagan pelajar
              sangatlah menarik dan menjadi sebuah kebangaan tertentu dalam melihat peroses belajarnya.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-cyan-300 py-4'>
        <img src={ZigZag} alt='zigzag-vector' />
      </section>
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
