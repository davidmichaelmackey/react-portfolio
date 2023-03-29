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
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='py-4 text-6xl font-bold text-center text-[#001B5E]'>
            About
          </h1>
          <img
            className='object-center mt-28 rounded-2xl'
            src={hero}
            alt='A mirror photo of David Michael Mackey taken in Los Angeles, CA, back in 2019.'
          />

          <div className='flex flex-row justify-center items-center'>
            <p className='font-medium text-center text-2xl max-w-5xl mt-12 text-gray-800'>
              As a web developer, who specializes in front-end & back-end, I
              believe in designing a cleaner, more accessible world, where
              user-interfaces are mediums between human & machine that foster
              intelligent, intuitive, and delightful interactions. <br></br>
              <br></br>
              Together, through a collective effort, we can bridge the
              intersection of simplicity & function to craft an inspiring,
              compelling, and authentic brand narrative. <br></br>
              <br></br>Let's design a world that's thoughtful, considered, and
              aesthetically pleasing.
            </p>
          </div>
        </div>
        <Resume className='object-center' />
      </div>
    </div>
  );
};

export default About;
