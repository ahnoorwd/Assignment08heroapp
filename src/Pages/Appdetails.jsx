import React from "react";
import { useParams } from "react-router";
import UseproductsHook from "../Hooks/UseproductsHook";
import { MdDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
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

const Appdetails = () => {
  const { id } = useParams();
  const { apps, loading } = UseproductsHook();
  const appinfo = apps.find((a) => String(a.id) === id);

  if (loading) return <p className="text-center mt-10">Loading Data...</p>;
  if (!appinfo) return <p className="text-center mt-10">App not found.</p>;

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
    <div className="flex flex-col bg-gray-50 p-8 rounded-xl shadow-md max-w-5xl mx-auto mt-10 mb-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left - App Image */}
        <div className="flex-shrink-0 w-full md:w-1/4 flex justify-center items-center mb-6 md:mb-0">
          <img src={image} alt={title} className="w-40 h-40 object-contain" />
        </div>

        {/* Right - App Details */}
        <div className="md:ml-10 w-full md:w-3/4">
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          <p className="text-gray-500 text-sm">
            Developed by{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              {companyName}
            </span>
          </p>

          <hr className="my-4 border-gray-300" />

          {/* Stats Section */}
          <div className="flex flex-wrap gap-10 items-center">
            <div className="flex flex-col items-center">
              <MdDownload className="text-green-600 text-3xl mb-1" />
              <p className="text-sm text-gray-500">Downloads</p>
              <h3 className="text-2xl font-bold text-gray-800">{downloads}</h3>
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

          <div className="mt-6">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
              Install Now ({size} MB)
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
              margin={{
                top: 10,
                right: 10,
                left: window.innerWidth < 640 ? 30 : 60, // adjust left padding for mobile
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                tick={{ fontSize: 10 }}
                tickMargin={5}
                interval="preserveStartEnd"
              />
              <YAxis
                dataKey="name"
                type="category"
                width={60}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#f97316"
                barSize={window.innerWidth < 640 ? 16 : 20}
                radius={[0, 6, 6, 0]}
              >
                <LabelList
                  dataKey="count"
                  position="right"
                  className="text-gray-700"
                  style={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Appdetails;
