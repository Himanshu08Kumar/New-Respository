import React from 'react';

const Resume = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <embed
        // src={`${process.env.PUBLIC_URL}/Himanshu_Resume.pdf`}
        src='Himanshu_Resume.pdf'
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Resume;
