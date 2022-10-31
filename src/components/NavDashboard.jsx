import React, { useState } from 'react';
import { LOGO, HAM } from '../assets/index';
import { Link } from 'react-router-dom';

export default function NavDashboard() {
  const [tekan, setTekan] = useState(true);
  return (
    <>
      <div className={'flex h-fit w-full items-center justify-between p-2' + (!tekan ? ' shadow-md' : ' shadow-none')}>
        <button
          className='flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 p-2'
          onClick={() => {
            setTekan(!tekan);
          }}
        >
          <img src={HAM} alt='hamburger' />
        </button>
        <div>
          <img src={LOGO} alt='logo' />
        </div>
      </div>
      <div className={tekan ? 'flex flex-col shadow-md' : 'hidden'}>
        <Link to={'/dashboard'}>
          <div className='h-fit w-full p-4 text-center font-bold hover:bg-cyan-100 hover:text-cyan-600'>
            <p>HOME</p>
          </div>
        </Link>
        <Link to={'to-do-list'}>
          <div className='h-fit w-full p-4 text-center font-bold hover:bg-cyan-100 hover:text-cyan-600'>
            <p>TO DO LIST</p>
          </div>
        </Link>
        <Link to={'jadwal'}>
          <div className='h-fit w-full p-4 text-center font-bold hover:bg-cyan-100 hover:text-cyan-600'>
            <p>JADWAL</p>
          </div>
        </Link>
        <Link to={'/dashboard'}>
          <div className='h-fit w-full p-4 text-center font-bold hover:bg-cyan-100 hover:text-cyan-600'>
            <p>PENGATURAN</p>
          </div>
        </Link>
      </div>
    </>
  );
}
