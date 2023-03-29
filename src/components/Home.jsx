import React from 'react';
import gradient1 from '../assets/images/gradient1.jpg';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import Footer from './Footer';

const Home = () => {
  return (
    <div id='home'>
      <img
        className='w-full h-screen object-cover object-center'
        src={gradient1} //!!!
        alt='A colorful gradient background photo.'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
          <h1 className='text-4xl sm:text-6xl font-bold text-gray-800'>
            David Michael Mackey
          </h1>
          <h2 className='flex sm:text-3xl text-xl font-semibold pt-4 text-grey-800'>
            <span className='text-gray-800'>MERN Stack Developer</span>
            <span className='text-gray-200'>&nbsp; &#123;</span>
            <div className='text-green-200'>
              <TypeAnimation
                sequence={[
                  'MongoDB ',
                  1800,
                  'Express.js ',
                  1800,
                  'React ',
                  1800,
                  'Node.js ',
                  1800,
                ]}
                wrapper='div'
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
              />
            </div>
            <span className='text-gray-200'>&nbsp; &#125;</span>
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://github.com/davidmichaelmackey' target='_blank'>
              <AiFillGithub
                className='fill-gray-800 cursor-pointer'
                size={29}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/davidmichaelmackey/'
              target='_blank'
            >
              <AiFillLinkedin
                className='fill-gray-800 cursor-pointer'
                size={32}
              />
            </a>
            <a
              href='https://www.instagram.com/davidmichaelmackey/'
              target='_blank'
            >
              <AiFillInstagram
                className='fill-gray-800 cursor-pointer'
                size={32}
              />
            </a>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
