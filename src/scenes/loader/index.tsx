import React from 'react';
import '../../index.css';  
import caffeineRushTeaGif from '../../assets/gif/caffeine-rush-tea.gif';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <img src={caffeineRushTeaGif} alt="Loading..." width="200" height="350" />
    </div>
  );
};

export default Loader;
