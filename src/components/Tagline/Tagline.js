// Tagline.js
import React from 'react';
import Typewriter from 'typewriter-effect';
import './Tagline.css';

const Tagline = () => {
  return (
    <div className="tagline">
      <Typewriter
        options={{
          strings: ['<span class="white-text">Smart</span> <span class="green-text">Finance.</span>', '<span class="white-text">Secure</span> <span class="green-text">Spending.</span>'],
          autoStart: true,
          loop: true,
          cursor: '',
        }}
      />
    </div>
  );
};

export default Tagline;
