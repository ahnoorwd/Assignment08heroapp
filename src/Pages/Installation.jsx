import { useEffect, useState } from "react";
import UseproductsHook from "../Hooks/UseproductsHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loadingspinner from "../Components/Loadingspinner";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const { apps ,loading } = UseproductsHook();

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.success("App uninstalled successfully!"); // ✅ Toastify success
  };

  // Merge localStorage data with hook data
  const mergedApps = installedApps.map((app) => {
    const matched = apps.find((a) => a.id === app.id);
    return matched ? { ...matched } : app;
  });

  // Sorting logic
  const sortedApps = (() => {
    if (sortOrder === "downloads-asc") {
      return [...mergedApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-desc") {
      return [...mergedApps].sort((a, b) => b.downloads - a.downloads);
    }
    return mergedApps;
  })();

   if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loadingspinner count={3} />
    </div>
  );
}

  return (
    <div className="px-4 md:px-10 py-6">
      <h2 className="text-2xl font-bold text-center mb-1">Your Installed Apps</h2>
      <p className="text-center text-gray-500 mb-6">
        Explore all trending apps on the market developed by us
      </p>

      {/* tost show here on top */}
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

      <div className="space-y-4 w-full md:w-3/5 mx-auto">
        {/* Header + Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-3">
          <p className="font-bold text-[18px]">({sortedApps.length}) Apps Found</p>

          <label className="form-control">
            <select
              className="select select-primary"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Downloads</option>
              <option value="downloads-asc">Low-&gt; High</option>
              <option value="downloads-desc">High-&gt; Low</option>
            </select>
          </label>
        </div>

        {/* App List */}
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white shadow rounded-2xl p-4 border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  src={app.image || "https://via.placeholder.com/60"}
                  alt={app.title}
                  className="w-[200px] h-[150px] rounded-xl object-cover"
                />
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">{app.title}</h3>
                  <p className="text-sm text-gray-500">{app.companyName}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="text-green-500 text-[20px]">⬇ {app.downloads}M</span>
                    <span className="text-orange-500 text-[20px]">⭐ {app.ratingAvg}</span>
                    <span className="text-[20px]">{app.size} MB</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="mt-3 sm:mt-0 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-4xl font-bold text-gray-500">No apps installed yet.</p>
        )}
      </div>
    </div>
  );
};

export default Installation;
