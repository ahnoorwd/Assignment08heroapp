// import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import { Outlet } from "react-router";
// import Footer from "../Components/Footer";
// import Loadingspinner from "../Components/Loadingspinner";

// const Mainlayout = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate loading time (useful when data loads instantly from public folder)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2500); // show spinner for 2.5 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />

//       <div className="flex-1">
//         {isLoading ? (
//           <Loadingspinner />
//         ) : (
//           <Outlet />
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Mainlayout;









import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar></Navbar>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
