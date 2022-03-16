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
      <div className='mt-24 w-[560px] relative'>
        <Image src={`/img/chart.png`} layout='fill' alt='' className='w-full' />
      </div>
    </section>
  );
}

export default Chart;
