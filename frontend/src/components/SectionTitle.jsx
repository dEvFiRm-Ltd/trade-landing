import React from 'react';

function SectionTitle({ title, subtitle }) {
  return (
    <div className='flex flex-col items-center '>
      {subtitle && (
        <h2 className='leading-9 text-[21px] tracking-[21%] font-Hellix500 uppercase '>
          {subtitle}
        </h2>
      )}
      {title && (
        <h3 className=' text-[50px] leading-9 font-Hellix500 capitalize '>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SectionTitle;
