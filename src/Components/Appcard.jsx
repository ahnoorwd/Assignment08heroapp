import React from 'react';
import { FaStar } from 'react-icons/fa'; 
import { MdDownload } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";// using react-icons for the star
import { Link } from 'react-router';

const Appcard = ({ app }) => {
  const { image, title, companyName, downloads, ratingAvg,id } = app;

  return (

    <Link to={`/appdetails/${id}`}>
     <div className="card bg-base-100 p-4 shadow-sm cursor-pointer">
  <figure>
    <img className='w-full h-58 object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title} : {companyName}</h2>
    <div className='flex justify-between mt-2'>
     <button className='btn  bg-gray-400 text-bold'><MdDownload />{downloads} M</button>
     <button className='btn  bg-orange-300 text-bold'><IoIosStarOutline/>{ratingAvg}</button>
    </div>
  </div>
     </div>
    </Link>
    
  );
};

export default Appcard;

