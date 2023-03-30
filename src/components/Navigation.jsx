import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        size={28}
        onClick={handleNav}
        className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <Link
            to='/react-portfolio/'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            onClick={handleNav}
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </Link>
          <Link
            to='/react-portfolio/about'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            onClick={handleNav}
          >
            <BsPerson size={20} />
            <span className='pl-4'>About</span>
          </Link>
          <Link
            to='/react-portfolio/portfolio'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            onClick={handleNav}
          >
            {' '}
            <GrProjects size={20} /> <span className='pl-4'>Portfolio</span>
          </Link>
          <Link
            to='/react-portfolio/contact'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            onClick={handleNav}
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </Link>
        </div>
      ) : (
        ''
      )}
      <div className='md:block hidden fixed top-[35.5%] z-10'>
        <div className='flex flex-col'>
          <Link
            to='/react-portfolio/'
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            to='/react-portfolio/about'
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <BsPerson size={20} />
          </Link>
          <Link
            to='/react-portfolio/portfolio'
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineProject size={20} />
          </Link>
          <Link
            to='/react-portfolio/contact'
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <AiOutlineMail size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
