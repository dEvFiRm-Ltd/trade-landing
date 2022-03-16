import React from 'react';
import SectionTitle from './SectionTitle';

function Pricing() {
  return (
    <section className='bg-[#4f0080] bg-opacity-10 backdrop-blur-[48px] '>
      <div className='container pt-47 pb-[119px] flex flex-col items-center '>
        <SectionTitle title={'pricing'} />
        <div className=' mt-[80px] pl-65 pr-63 pt-45 pb-[100px] flex-row flex justify-between rounded-[20px] backdrop-blur-[48px] bg-opacity-5 bg-white w-[945px] '>
          <div className=' w-[53%] flex flex-col justify-start '>
            <h4 className='uppercase font-Hellix500 text-xl tracking-[5px] mb-[9px] '>
              What You Will Get In this
            </h4>
            <div className='flex flex-row justify-between relative py-16 first:pb-[9px] first:pt-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-[1px] after:bg-[#828282] after:opacity-50 after:absolute last:after:hidden '>
              <div className='flex flex-row '>
                <i className='fa-regular fa-circle-user mr-20 text-xl '></i>
                <h5 className='font-Hellix500 text-lg '>
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
              </div>
              <i className='fa-solid fa-circle-check text-xl text-green-400 '></i>
            </div>
            <div className='flex flex-row justify-between relative py-16 first:pb-[9px] first:pt-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-[1px] after:bg-[#828282] after:opacity-50 after:absolute last:after:hidden '>
              <div className='flex flex-row '>
                <i className='fa-regular fa-circle-user mr-20 text-xl '></i>
                <h5 className='font-Hellix500 text-lg '>
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
              </div>
              <i className='fa-solid fa-circle-check text-xl text-green-400 '></i>
            </div>
            <div className='flex flex-row justify-between relative py-16 first:pb-[9px] first:pt-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-[1px] after:bg-[#828282] after:opacity-50 after:absolute last:after:hidden '>
              <div className='flex flex-row '>
                <i className='fa-regular fa-circle-user mr-20 text-xl '></i>
                <h5 className='font-Hellix500 text-lg '>
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
              </div>
              <i className='fa-solid fa-circle-check text-xl text-green-400 '></i>
            </div>
            <div className='flex flex-row justify-between relative py-16 first:pb-[9px] first:pt-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-[1px] after:bg-[#828282] after:opacity-50 after:absolute last:after:hidden '>
              <div className='flex flex-row '>
                <i className='fa-regular fa-circle-user mr-20 text-xl '></i>
                <h5 className='font-Hellix500 text-lg '>
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
              </div>
              <i className='fa-solid fa-circle-check text-xl text-green-400 '></i>
            </div>
            <div className='flex flex-row justify-between relative py-16 first:pb-[9px] first:pt-0 after:bottom-0 after:left-0 after:right-0 after:w-full after:h-[1px] after:bg-[#828282] after:opacity-50 after:absolute last:after:hidden '>
              <div className='flex flex-row '>
                <i className='fa-regular fa-circle-user mr-20 text-xl '></i>
                <h5 className='font-Hellix500 text-lg '>
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
              </div>
              <i className='fa-solid fa-circle-check text-xl text-green-400 '></i>
            </div>
          </div>
          <div className='w-[47%] flex flex-col justify-end items-center '>
            <h5 className=' text-8xl font-Hellix700 w-[260px] mb-[9px] relative pl-47 '>
              <span className='font-Hellix300 text-[65.07px] leading-[117.13px] absolute top-[46px] left-0 '>
                $
              </span>{' '}
              50 <span className='absolute text-5xl -bottom-37 '>.00</span>
            </h5>
            <button type='button' className='btns py-22 px-87 '>
              buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
