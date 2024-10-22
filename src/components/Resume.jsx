import React from 'react';

const Resume = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/Himanshu_Resume.pdf`}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Resume"
      />
    </div>
  );
};

export default Resume;
