import React from 'react';

const ProjectItem = ({ img, title, description, url }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-[#F2B5E3] to-[#94EAE7]'>
      <img src={img} alt='/' className='rounded-xl group-hover:opacity-5' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{description}</p>
        <a href={url} target='_blank'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-center p-3 rounded-ld bg-[#CD6979] text-white cursor-pointer text-md w-[120px]'>
              Repository
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
