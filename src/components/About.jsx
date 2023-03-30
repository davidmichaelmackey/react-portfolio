import React from 'react';
import hero from '../assets/images/hero1.jpeg';
import gradientImg from '../assets/images/gradient4.jpg';
import Resume from './Resume';

const About = () => {
  return (
    <div id='about'>
      <img
        className='w-full h-screen object-cover object-center'
        src={gradientImg} //!!!
        alt='A mirror photo of David Michael Mackey taken in Los Angeles, CA, back in 2019.'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 sm:py-16 py-5'>
          <h1 className='text-2xl sm:text-6xl font-bold text-center text-gray-800'>
            About
          </h1>
          <img
            className='object-center sm:mt-10 mt-4 rounded-md shadow-xl shadow-gray-900'
            src={hero}
            alt='A mirror photo of David Michael Mackey taken in Los Angeles, CA, back in 2019.'
          />

          <div className='justify-center items-center'>
            <p className='font-medium text-center sm:text-2xl text-md max-w-5xl sm:mt-10 mt-8 text-gray-800'>
              As a web developer, who specializes in front-end & back-end, I
              believe in designing a cleaner, more accessible world, where
              user-interfaces are mediums between human & machine that foster
              intelligent, intuitive, and delightful interactions.
            </p>
            <p className='font-medium text-center sm:text-2xl text-md max-w-5xl sm:mt-4 mt-2 text-gray-800'>
              Together, through a collective effort, we can bridge the
              intersection of simplicity & function to craft an inspiring,
              compelling, and authentic brand narrative.
            </p>
            <p className='font-medium text-center sm:text-2xl text-md max-w-5xl sm:mt-4 mt-2 text-gray-800'>
              Let's design a world that's thoughtful, considered, and
              aesthetically pleasing.
            </p>
          </div>
        </div>
        <Resume />
      </div>
    </div>
  );
};

export default About;
