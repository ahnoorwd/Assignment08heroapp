import React from "react";
import heropng from "../assets/hero.png";
import UseproductsHook from "../Hooks/UseproductsHook";
import Appcard from "../Components/Appcard";
import { Link } from "react-router";

const Home = () => {
  const { apps } = UseproductsHook();
  const sliceapp = apps.slice(0,8)
  console.log(apps);
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 md:px-20 py-16 ">
      {/* Heading Section */}
      <div className="max-w-3xl">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
            Productive
          </span>{" "}
          Apps
        </h3>

        <p className="text-gray-600 leading-relaxed">
          At{" "}
          <span className="text-[#632ee3] font-semibold underline underline-offset-2">
            HERO.IO
          </span>
          , we craft innovative apps designed to make everyday life simpler,
          smarter, and more exciting. <br className="hidden md:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>

      {/* Store Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button className="flex items-center gap-2 bg-white border border-gray-300 hover:border-[#632ee3] rounded-lg shadow-md px-5 py-2 transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10"
          />
        </button>
        <button className="flex items-center gap-2 bg-white border border-gray-300 hover:border-[#632ee3] rounded-lg shadow-md px-5 py-2 transition">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-10"
          />
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative mt-10">
        <img
          src={heropng}
          alt="Hero"
          className="w-[280px] md:w-[400px] mx-auto drop-shadow-2xl"
        />
      </div>

      {/* Stats Section */}
      <div className="w-full mt-16 py-12 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white text-center rounded-t-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold">29.6M</h3>
            <p className="text-sm opacity-90">Total Downloads</p>
            <p className="text-xs opacity-80 mt-1">21% More Than Last Month</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">906K</h3>
            <p className="text-sm opacity-90">Total Reviews</p>
            <p className="text-xs opacity-80 mt-1">46% More Than Last Month</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">132+</h3>
            <p className="text-sm opacity-90">Active Apps</p>
            <p className="text-xs opacity-80 mt-1">31 More Will Launch Soon</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 className="text-[48px] mt-4 font-bold">Trending Apps here </h3>
          <p className="text-[#627382] text-[20px]">
            {" "}
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            sliceapp.map(app=><Appcard app={app}></Appcard>)
        }
        </div>
      </div>
      <Link to='/apps' className="btn mt-6 bg-blue-400 text-white text-[18px]">Show All Apps</Link>
    </div>
  );
};

export default Home;
