import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import HeroImage from '../assets/Hero.svg';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <HomeLayout>
      <header className='h-screen bg-cyan-200'>
        <div className='item container flex items-center'>
          <section className='w-1/2'>
            <h2 className='text-6xl font-bold'>
              Tracking
              <br />
              Belajar mu! <br />
              Bersama Kami
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aut eaque asperiores aliquid quasi,
              suscipit obcaecati incidunt iste fugiat, repellat explicabo ducimus harum optio mollitia! Laudantium
              molestias non, totam consequuntur ullam eveniet!
            </p>
            <Link>Get Started</Link>
          </section>
          <section className='w-1/2'>
            <img src={HeroImage} alt='hero-img' />
          </section>
        </div>
      </header>
    </HomeLayout>
  );
}
