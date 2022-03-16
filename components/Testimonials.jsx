import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
function Testimonials() {
  return (
    <section className='container py-[117px]'>
      <SectionTitle
        title={'testimonials'}
        subtitle='WHAT world SAYS ABOUT US'
      />
      <div className='mt-[35px]'>
        <div className='mb-87 pt-102 pb-87 px-[136px] rounded-[20px] bg-white bg-opacity-5 w-[891px] backdrop-blur-[20px] flex flex-row items-center justify-between relative '>
          {/* <div className='opacity-10 absolute top-[38px] right-[57px] w-[250px] h-[250px] '>
            <i className='fa-solid fa-quote-right text-[250px] '></i>
          </div> */}
          <div className='flex flex-col '>
            <div className='w-[175px] mx-[2px] h-[175px] relative mb-28 rounded-[50%] overflow-hidden '>
              <Image
                src={`/img/user.jpg`}
                layout='fill'
                className='m-auto block'
                alt=''
              />
            </div>
            <h5 className='uppercase font-Hellix600 text-4xl text-center '>
              ADAM SMITH
            </h5>
            <h6 className='uppercase font-Hellix600 text-md text-center leading-5 tracking-[4px] '>
              ADAM SMITH
            </h6>
          </div>
          <div className='flex flex-col justify-start w-[342px]'>
            <p className='text-md font-Hellix400 mb-24'>
              &quote; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit, vel? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro voluptatem nesciunt ullam neque! Accusantium, earum. &quote;
            </p>
            <div className='flex flex-row'>
              <i className='fa-solid fa-star mx-[2px] text-[#CCB53C]'></i>
              <i className='fa-regular fa-star mx-[2px] text-[#CCB53C]'></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
