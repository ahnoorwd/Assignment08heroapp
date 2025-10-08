import React from "react";
import error from "../assets/error-404.png"; // ✅ make sure path is correct

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white text-center p-6">
      <img
        src={error}
        alt="Error page illustration"
        className="w-64 h-64 mb-6 animate-bounce"
      />
      <h1 className="text-4xl font-bold mb-3">Oops! Page Not Found 😢</h1>
      <p className="text-lg opacity-90 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.  
        Please check the URL or go back to the homepage.
      </p>
      <a
        href="/"
        className="btn bg-white text-purple-700 hover:bg-purple-100 transition-all px-6 py-3 font-semibold rounded-full shadow-md"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Error;
