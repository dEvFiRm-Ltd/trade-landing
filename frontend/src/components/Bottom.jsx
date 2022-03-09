import React from 'react';

function Bottom() {
  return (
    <footer className='border-t border-[#828282] '>
      <div className='container py-60 flex flex-row justify-between items-center '>
        <p className=' text-xl leading-5 '>Copyrights@ Devfirm 2021</p>
        <div className='flex flex-row'>
          <a
            href='!'
            className='block mr-30 rounded-md p-11 bg-white text-black '
          >
            <i class='fa-brands text-lg fa-cc-visa'></i>
          </a>
          <a href='!' className='block mr-30 rounded-md p-11 bg-white '>
            <i class='fa-brands text-lg fa-cc-visa'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Bottom;
