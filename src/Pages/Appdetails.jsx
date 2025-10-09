import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UseproductsHook from "../Hooks/UseproductsHook";
import { MdDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Appnotfound from "./Appnotfound";

const Appdetails = () => {
  const { id } = useParams();
  const { apps, loading } = UseproductsHook();
  const appinfo = apps.find((a) => String(a.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // data are coming here from lcl storgae and try to find  
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.some((app) => app.id === appinfo?.id);
    setIsInstalled(alreadyInstalled);
  }, [appinfo]);

  const handleInstall = () => {
    toast.success(`${appinfo.title} has been successfully installed!`);

    // Save to localStorage
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    installedApps.push({
      id: appinfo.id,
      title: appinfo.title,
      companyName: appinfo.companyName,
      installedAt: new Date().toISOString(),
    });
    localStorage.setItem("installedApps", JSON.stringify(installedApps));

    // Disable the button
    setIsInstalled(true);
  };

  if (loading) return <p className="text-center mt-10">Loading Data...</p>;
  if (!appinfo) return <p className="text-center mt-10"> <Appnotfound></Appnotfound> </p>;

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = appinfo;


  return (
    <div className="flex flex-col bg-gray-50 p-8 rounded-xl shadow-md max-w-5xl mx-auto mt-6 mb-4">

    {/* toastfy add here  */}
     <ToastContainer
        position="top-center"
        autoClose={2000}       // auto close in 2 seconds
        hideProgressBar={true} // hide progress bar for cleaner look
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 w-full md:w-1/4 flex justify-center items-center mb-6 md:mb-0">
          <img src={image} alt={title} className="w-40 h-40 object-contain" />
        </div>

        <div className="md:ml-10 w-full md:w-3/4">
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          <p className="text-gray-500 text-sm">
            Developed by{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              {companyName}
            </span>
          </p>

          <hr className="my-4 border-gray-300" />

          <div className="flex flex-wrap gap-10 items-center">
            <div className="flex flex-col items-center">
              <MdDownload className="text-green-600 text-3xl mb-1" />
              <p className="text-sm text-gray-500">Downloads</p>
              <h3 className="text-2xl font-bold text-gray-800">{downloads}M</h3>
            </div>

            <div className="flex flex-col items-center">
              <FaStar className="text-orange-400 text-3xl mb-1" />
              <p className="text-sm text-gray-500">Average Ratings</p>
              <h3 className="text-2xl font-bold text-gray-800">{ratingAvg}</h3>
            </div>

            <div className="flex flex-col items-center">
              <BiSolidLike className="text-purple-600 text-3xl mb-1" />
              <p className="text-sm text-gray-500">Total Reviews</p>
              <h3 className="text-2xl font-bold text-gray-800">{reviews}</h3>
            </div>
          </div>

          {/* Install Button */}
          <div className="mt-6">
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`px-6 py-3 rounded-md shadow-md font-semibold text-white transition ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mt-10 w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Ratings</h2>
        <div className="w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...ratings].reverse()}
              layout="vertical"
              margin={{ top: 10, right: 10, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fontSize: 10 }} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" barSize={18} radius={[0, 6, 6, 0]}>
                <LabelList dataKey="count" position="right" className="text-gray-700" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Appdetails;
