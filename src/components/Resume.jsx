import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div>
      <div className='absolute bottom-6 right-6'>
        <a
          className='float-left text-xl font-medium text-orange-200 hover:line-through hover:decoration-gray-800'
          href='../assets/pdf/davidmackey-developer-resume-2023.pdf'
          download='David-Mackey-Developer-Resume-2023'
        >
          Download My <span className='text-gray-800'>Resume</span>
          <FaFileDownload
            size={26}
            className='float-right ml-2 fill-gray-800'
          />
        </a>
      </div>
    </div>
  );
};

export default Resume;
