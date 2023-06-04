import React from 'react';
import ResumePDF from '../assets/MostafaReda_Resume.pdf';
import ResumeImg from '../assets/images/Resume.png';

function ResumeImage({ showResume }) {
  const handleDownload = () => {
    window.open(ResumePDF, '_blank');
  };

  return (
    <img
      alt=""
      onClick={handleDownload}
      src={ResumeImg}
      loading="lazy"
      className={`Resume-image-container ${
        showResume ? 'Resume-animation' : 'fade-Resume-animation'
      }`}
    ></img>
  );
}

export default ResumeImage;
