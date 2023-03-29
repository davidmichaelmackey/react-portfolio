import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div>
      <a
        href='../assets/pdf/davidmackey-developer-resume-2023.pdf'
        download='David-Mackey-Developer-Resume-2023'
      >
        Resume <span className={FaFileDownload}></span>
      </a>
    </div>
  );
};

export default Resume;
