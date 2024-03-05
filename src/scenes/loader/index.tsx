import React from 'react';
import '../../index.css';  
import yogaDogGif from '../../assets/gif/yoga-dog.gif';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <img src={yogaDogGif} alt="Loading..." width="200" height="350" />
    </div>
  );
};

export default Loader;
