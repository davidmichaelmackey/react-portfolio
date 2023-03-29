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
        className='absolute top-6 right-6 z-[99] md:hidden cursor-pointer'
      />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <Link
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            to='/react-portfolio'
            onClick={handleNav}
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </Link>
          <Link
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            to='/about'
            onClick={handleNav}
          >
            <BsPerson size={20} />
            <span className='pl-4'>About</span>
          </Link>
          <Link
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            to='/portfolio'
            onClick={handleNav}
          >
            {' '}
            <GrProjects size={20} /> <span className='pl-4'>Portfolio</span>
          </Link>
          <Link
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            to='/contact'
            onClick={handleNav}
          >
            <AiOutlineMail size={20} />
            <span className='pl-4'>Contact</span>
          </Link>
        </div>
      ) : (
        ''
      )}
      <div className='md:block hidden fixed top-[40%] z-10'>
        <div className='flex flex-col'>
          <Link
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            to='/react-portfolio'
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            to='/about'
          >
            <BsPerson size={20} />
          </Link>
          <Link
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            to='/portfolio'
          >
            <AiOutlineProject size={20} />
          </Link>
          <Link
            className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            to='/contact'
          >
            <AiOutlineMail size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
