import React from 'react';
import notfountimg from '../assets/App-Error.png';

const Appnotfound = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={notfountimg} alt="Not Found" className="object-contain" />
    </div>
  );
};

export default Appnotfound;
