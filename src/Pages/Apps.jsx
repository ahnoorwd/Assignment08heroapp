
import React, { useState, useEffect } from "react";
import UseproductsHook from "../Hooks/UseproductsHook";
import Appcard from "../Components/Appcard";
import Loadingspinner from "../Components/Loadingspinner";
import { CiSearch } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa";

const Apps = () => {
  const { apps, loading } = UseproductsHook();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Handle search 
  useEffect(() => {
    if (search.trim() !== "") {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 400);
      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [search]);

  const term = search.trim().toLowerCase();
  const filteredApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div>
      {/* Hnavbar */}
      <div className="text-center mt-4">
        <h3 className="text-3xl font-bold">Our All Applications</h3>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

     
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 gap-3">
        <h3 className="font-bold text-2xl">
          Total Apps Found{" "}
          <span className="text-sm text-gray-500">({filteredApps.length})</span>
        </h3>

        <label className="input flex items-center gap-2 border rounded-md px-3 py-2 w-full md:w-1/3">
          <CiSearch className="text-gray-500 text-xl" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search app..."
            className="outline-none w-full"
          />
        </label>
      </div>

      
      {loading ? (
        <Loadingspinner count={15} />
      ) : isSearching ? (
        <div className="flex justify-center items-center mt-20">
          <FaSpinner className="text-5xl text-red-500 animate-spin" />
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-4">
          {filteredApps.map((app) => (
            <Appcard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 text-gray-500 text-xl font-semibold">
          sorry!!!! No Apps found
        </div>
      )}
    </div>
  );
};

export default Apps;
