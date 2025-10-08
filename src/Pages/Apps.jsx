import React, { useState } from "react";
import UseproductsHook from "../Hooks/UseproductsHook";
import Appcard from "../Components/Appcard";

const Apps = () => {
  const { apps } = UseproductsHook();
  const [search,setsearch] = useState("")
  const term = search.trim().toLowerCase()
  const searchapp =term?apps.filter(sapp=>sapp.title.toLowerCase().includes(term)):apps
  return (
    <div>
      <div className="flex justify-between items-center mt-4 px-4 py-4">
        <h3 className="font-bold text-2xl">There Are Total App Found {" "}
            <span className="text-sm text-gray-500">({searchapp.length})</span>
        </h3>
        <label className="input ">
          <input
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-4">
        {searchapp.map((app) => (
          <Appcard app={app}></Appcard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
