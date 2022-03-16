import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
function Chart() {
  return (
    <section className='container py-[124px] flex flex-col items-center '>
      <SectionTitle
        title={'Devfirm Chart'}
        miniTitle='Check out what a difference Devfirm makes on your chart!'
      />
      <div className='mt-24 w-[560px]'>
        <Image
          src={`${process.env.PUBLIC_URL}/img/chart.png`}
          alt=''
          className='w-full'
        />
      </div>
    </section>
  );
}

export default Chart;
