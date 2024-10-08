import React, { useEffect } from 'react';
import './SparkleCursor.css'; // Import the CSS file

const SparkleCursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const sparkleContainer = document.getElementById('sparkle-container');
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');

      sparkle.style.left = `${event.clientX}px`;
      sparkle.style.top = `${event.clientY}px`;
      sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

      sparkleContainer.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 600); // Duration of sparkle effect
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="sparkle-container" className="sparkle-container" />;
};

export default SparkleCursor;
