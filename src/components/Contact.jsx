import React from 'react';
import gradient2 from '../assets/images/gradient2.jpg';

const Contact = () => {
  return (
    <div>
      <img
        className='w-full h-screen object-cover object-center'
        src={gradient2} //!!!
        alt='A colorful gradient background photo.'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className=' sm:mb-12 text-4xl sm:text-6xl font-bold text-center text-gray-800'>
            Contact
          </h1>
          <form
            action='https://getform.io/f/661d5980-90a7-45e8-8609-e1f22db1bc81'
            method='POST'
            encType='multipart/form-data'
          >
            <div className='grid md:grid-cols-2 sm:gap-4 gap-0 w-full py-2'>
              <div className='flex flex-col'>
                <label className='uppercase text-sm sm:py-2 text-grey-800'>
                  Name
                </label>
                <input
                  className='bg-transparent border-2 rounded-lg p-3 flex border-gray-800 focus:outline-none'
                  type='text'
                  name='name'
                />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-sm sm:py-2 text-grey-800'>
                  Phone
                </label>
                <input
                  className='bg-transparent border-2 rounded-lg p-3 flex border-gray-800 focus:outline-none'
                  type='text'
                  name='phone'
                />
              </div>
            </div>
            <div className='grid sm:gap-4 gap-0 w-full'>
              <div className='flex flex-col'>
                <div className='flex flex-col sm:py-2'>
                  <label className='uppercase text-sm sm:py-2 text-grey-800'>
                    Email
                  </label>
                  <input
                    className='bg-transparent border-2 rounded-lg p-3 flex border-gray-800 focus:outline-none'
                    type='email'
                    name='email'
                  />
                </div>
                <br></br>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm text-grey-800'>
                    Subject
                  </label>
                  <input
                    className='bg-transparent border-2 rounded-lg p-3 flex border-gray-800 focus:outline-none'
                    type='text'
                    name='subject'
                  />
                </div>
                <br></br>
                <div className='flex flex-col'>
                  <label className='uppercase text-sm sm:py-2 text-grey-800'>
                    Message
                  </label>
                  <textarea
                    className='bg-transparent border-2 rounded-lg p-3 border-gray-800 focus:outline-none sm:block hidden sm:visible invisible'
                    rows='10'
                    name='message'
                  ></textarea>
                  <textarea
                    className='bg-transparent border-2 rounded-lg p-3 border-gray-800 focus:outline-none sm:hidden block sm:invisible visible'
                    rows='5'
                    name='message'
                  ></textarea>
                </div>
                <br></br>
                <div className='flex flex-col'>
                  <button className='bg-blue-700 text-gray-100 mt-4 w-full p-4 rounded-lg'>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
