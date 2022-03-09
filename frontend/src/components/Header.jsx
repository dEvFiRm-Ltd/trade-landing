import React from 'react';

function Header() {
  return (
    <header className='container py-32 flex flex-row justify-between '>
      <div className='h-97'>
        <img
          src={`${process.env.PUBLIC_URL}/img/logo.svg`}
          className='w-full'
          alt=''
        />
      </div>
      <div className='w-[665px] flex justify-between flex-row items-center '>
        <div className='w-[61.65%] flex justify-between flex-row'>
          <a
            href='!#'
            className='text-white tracking-[39.4%] transition-all hover:text-purple '
          >
            Home
          </a>
          <a
            href='!#'
            className='text-white tracking-[39.4%] transition-all hover:text-purple '
          >
            Questions
          </a>
          <a
            href='!#'
            className='text-white tracking-[39.4%] transition-all hover:text-purple '
          >
            Contacts
          </a>
        </div>
        <button type='button' className='btns px-27 py-11  '>
          Buy now
        </button>
      </div>
    </header>
  );
}

export default Header;
