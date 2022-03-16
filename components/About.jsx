import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

function About() {
  return (
    <section className='container pt-87 pb-72'>
      <SectionTitle title='Simplifying Your Trading' subtitle='about company' />
      <div className='py-72 flex flex-wrap flex-row justify-center '>
        <div className='w-1/3 px-[7px] first:pl-0 postThird:pl-0 third:pr-0 '>
          <div className='w-full px-32 pt-60 pb-70 rounded-[20px] bg-[#7435cb] bg-opacity-10 backdrop-blur-[48px]  flex flex-col items-center '>
            <div className='overflow-hidden p-20 mb-11 rounded-[50%] bg-[#4B2572] '>
              <Image
                src={`${process.env.PUBLIC_URL}/img/problem.svg`}
                alt=''
                className='w-[85px] h-[85px]'
              />
            </div>
            <h4 className='uppercase text-[21px] leading-[85px] tracking-[21%] font-Hellix500 '>
              the problem
            </h4>
            <p className=' font-Hellix400 text-center text-md '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus praesentium ex, cumque fuga dignissimos quasi
              mollitia! Rerum quas non quidem mollitia, dolor dolore enim
              expedita, nostrum vero qui saepe dolorem ipsa. Doloribus optio
              pariatur est qui, incidunt corporis blanditiis dolor illum iusto
              accusamus, voluptatibus soluta autem tempore reprehenderit quia
              quasi.
            </p>
          </div>
        </div>
        <div className='w-1/3 px-[7px] first:pl-0 postThird:pl-0 third:pr-0 '>
          <div className='w-full px-32 pt-60 pb-70 rounded-[20px] bg-[#7435cb] bg-opacity-10 backdrop-blur-[48px]  flex flex-col items-center '>
            <div className='overflow-hidden p-20 mb-11 rounded-[50%] bg-[#4B2572] '>
              <Image
                src={`${process.env.PUBLIC_URL}/img/problem.svg`}
                alt=''
                className='w-[85px] h-[85px]'
              />
            </div>
            <h4 className='uppercase text-[21px] leading-[85px] tracking-[21%] font-Hellix500 '>
              the problem
            </h4>
            <p className=' font-Hellix400 text-center text-md '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus praesentium ex, cumque fuga dignissimos quasi
              mollitia! Rerum quas non quidem mollitia, dolor dolore enim
              expedita, nostrum vero qui saepe dolorem ipsa. Doloribus optio
              pariatur est qui, incidunt corporis blanditiis dolor illum iusto
              accusamus, voluptatibus soluta autem tempore reprehenderit quia
              quasi.
            </p>
          </div>
        </div>
        <div className='w-1/3 px-[7px] first:pl-0 postThird:pl-0 third:pr-0 '>
          <div className='w-full px-32 pt-60 pb-70 rounded-[20px] bg-[#7435cb] bg-opacity-10 backdrop-blur-[48px]  flex flex-col items-center '>
            <div className='overflow-hidden p-20 mb-11 rounded-[50%] bg-[#4B2572] '>
              <Image
                src={`${process.env.PUBLIC_URL}/img/problem.svg`}
                alt=''
                className='w-[85px] h-[85px]'
              />
            </div>
            <h4 className='uppercase text-[21px] leading-[85px] tracking-[21%] font-Hellix500 '>
              the problem
            </h4>
            <p className=' font-Hellix400 text-center text-md '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus praesentium ex, cumque fuga dignissimos quasi
              mollitia! Rerum quas non quidem mollitia, dolor dolore enim
              expedita, nostrum vero qui saepe dolorem ipsa. Doloribus optio
              pariatur est qui, incidunt corporis blanditiis dolor illum iusto
              accusamus, voluptatibus soluta autem tempore reprehenderit quia
              quasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
