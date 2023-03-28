import React from 'react';

const Footer = () => {
  return (
    <div className='absolute bottom-10 right-10'>
      <a href='https://vitejs.dev/' target='_blank'>
        <p className='float-left text-xl mr-2 font-medium text-gray-400 hover:line-through hover:decoration-amber-300'>
          Built with <span className='text-amber-300'>Vite</span>
          <img
            src='../../public/vite.svg'
            className='float-right max-h-7 ml-1'
          ></img>
        </p>
      </a>
    </div>
  );
};

export default Footer;
