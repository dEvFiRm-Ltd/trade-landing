import React from 'react';

function Footer() {
  return (
    <section className='container pb-[53px] flex flex-row '>
      <div className='w-[347px] flex flex-col mr-[274px] '>
        <div className='w-[200px]'>
          {/* <img
            src={`/img/logo.png`}
            className='w-full'
            alt=''
          /> */}{' '}
          Logo
        </div>
        <p className='text-md font-Hellix400 py-24'>
          Devfirm is a trading and finance company which helps you to grow your
          bank account.
        </p>
        <div className='pt-18 flex flex-row'>
          <a
            href='!'
            className='py-8 px-6 bg-[#7435CB] rounded-md mx-11 first:ml-0 last:mr-0 '
          >
            <i className='fa-brands fa-youtube'></i>
          </a>
          <a
            href='!'
            className='py-8 px-6 bg-[#7435CB] rounded-md mx-11 first:ml-0 last:mr-0 '
          >
            <i className='fa-brands fa-youtube'></i>
          </a>
          <a
            href='!'
            className='py-8 px-6 bg-[#7435CB] rounded-md mx-11 first:ml-0 last:mr-0 '
          >
            <i className='fa-brands fa-youtube'></i>
          </a>
        </div>
      </div>
      <div className='w-[210px] mr-[74px]'>
        <h3 className='font-Hellix500 capitalize text-3xl mb-6 tracking-[2.5px] '>
          Important Links
        </h3>
        <a href='!' className='mt-25 block capitalize text-md tracking-[2px] '>
          {' '}
          terms and Conditions{' '}
        </a>
        <a href='!' className='mt-25 block capitalize text-md tracking-[2px] '>
          {' '}
          terms and Conditions{' '}
        </a>
      </div>
      <div className='w-[210px]'>
        <h3 className='font-Hellix500 capitalize text-3xl mb-[44px] tracking-[2.5px] '>
          about us
        </h3>
        <div className='flex flex-col'>
          <h3 className='font-Hellix400 text-md text-[#969696]'>Address</h3>
          <p className='font-Hellix400 text-md text-[#969696]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            nostrum?
          </p>
          <h3 className='font-Hellix400 text-md text-[#969696]'>
            Phone Number
          </h3>
          <p className='font-Hellix400 text-md text-[#969696]'>+1234567890</p>
          <h3 className='font-Hellix400 text-md text-[#969696]'>Email</h3>
          <p className='font-Hellix400 text-md text-[#969696]'>
            example@example.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
