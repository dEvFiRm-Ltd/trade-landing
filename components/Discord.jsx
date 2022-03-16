import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
function Discord() {
  return (
    <section className='relative bg-[#4f0080] bg-opacity-10 backdrop-blur-[48px] '>
      <div className='w-[762px] h-[368.29px] absolute right-0 top-50% translate-y-1/2 '>
        <Image
          src={`${process.env.PUBLIC_URL}/img/discord.png`}
          alt=''
          className=''
        />
      </div>
      <div className='container pt-104 pb-[119px] '>
        <div className='w-[363px] flex flex-col items-start'>
          <SectionTitle
            subtitle={'about us'}
            left={true}
            title='our discord channel'
          />
          <div className='mt-45 '>
            <p className='font-Hellix400 text-md mb-46 '>
              We have a signal channel going 24/7 to bring you the best possible
              trades at all times. Our Channel offers a community with traders
              from all markets, pro and beginner - where we talk trades, answer
              questions, give strategies &amp; much more!
            </p>
            <button className='btns py-20 px-60' type='button'>
              join now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discord;
