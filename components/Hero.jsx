import React from 'react';
import Image from 'next/image';
function Hero() {
  return (
    <section className='relative'>
      <div className='h-[313px] absolute bottom-0 right-0 w-full z-20 bg-shade '></div>
      <div className='container relative pt-[137px] pb-[174px] '>
        <div className='w-[576px] flex flex-col flex-wrap'>
          <h1 className='text-left text-7xl font-Hellix300 text-white mb-14'>
            <span className='font-Hellix700'>Avoid</span> Taking Negative{' '}
            <span className='font-Hellix700'>Traders</span>{' '}
          </h1>
          <p className=' text-2xl text-left text-white mb-45 font-Hellix400 '>
            Get an edge against the competition using our advanced trading
            tools.
          </p>
          <button className='btns py-18 px-[62px] '> buy now </button>
        </div>

        <div className='h-[681px] absolute bottom-0 right-0 w-[562px] z-10 '>
          <Image className='' layout='fill' src={`/img/hero.png`} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
