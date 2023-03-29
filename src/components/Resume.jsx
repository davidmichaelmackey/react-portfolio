import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div>
      <div className='absolute bottom-10 right-10'>
        <a
          className='float-left text-xl font-medium text-amber-300 hover:line-through hover:decoration-[#001B5E]'
          href='../assets/pdf/davidmackey-developer-resume-2023.pdf'
          download='David-Mackey-Developer-Resume-2023'
        >
          Download My <span className='text-[#001B5E]'>Resume</span>
          <FaFileDownload
            size={20}
            className='float-right ml-2 fill-[#001B5E]'
          />
        </a>
      </div>
    </div>
  );
};

export default Resume;
