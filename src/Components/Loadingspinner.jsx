import React from "react";

const Loadingspinner = ({count=8}) => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({length:count}).map((__,id)=>(
          <div key={id} className="flex  flex-col ">
      <div className="skeleton h-48 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
      ))}
    </div>
  );
};

export default Loadingspinner;
