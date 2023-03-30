import React from 'react';
import vite from '../assets/images/vite.svg';

const Footer = () => {
  return (
    <div className='absolute sm:bottom-6 sm:right-6 bottom-4 right-4'>
      <a href='https://vitejs.dev/' target='_blank'>
        <p className='float-left text-md sm:text-xl mr-2 font-medium sm:text-gray-400 text-gray-300 hover:italic hover:line-through hover:decoration-amber-300'>
          Built with <span className='text-amber-300'>Vite</span>
          <img src={vite} className='float-right max-h-7 ml-1'></img>
        </p>
      </a>
    </div>
  );
};

export default Footer;
