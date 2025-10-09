import React from "react";
import logimg from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-700 py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and Info */}
        <aside className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <Link to='/'>
                        <img className="w-[50px] h-[50px]" src={logimg} alt="Logo" />

            </Link>
            <h2 className="text-xl font-semibold text-white">Hero.IO</h2>
          </div>
          <p className="text-sm leading-relaxed ">
             <span className="font-bold text-2xl text-orange-500">Hero.</span> IO Apps House
            <br />
            <span className="text-gray-400">Providing reliable app services.</span>
          </p>
        </aside>

        {/* Divider for small screens */}
        <div className="w-full h-[1px] bg-gray-700 md:hidden"></div>

        {/* Social Links */}
        <nav className="text-center md:text-right">
          <h6 className="text-lg font-semibold text-white mb-3">Follow Us</h6>
          <div className="flex justify-center md:justify-end gap-6">
            {/* Twitter */}
            <a href="#" className="hover:text-blue-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 
                2.165-2.724-.951.564-2.005.974-3.127 
                1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 
                0-5.515 2.966-4.797 6.045C7.63 8.797 4.002 
                6.837 1.573 3.858c-1.29 2.213-.669 5.108 
                1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 
                2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 
                1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 
                2.348-7.29 2.04 2.179 1.397 4.768 2.212 
                7.548 2.212 9.142 0 14.307-7.721 
                13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="hover:text-red-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 
                0-3.897.266-4.356 2.62-4.385 
                8.816.029 6.185.484 8.549 4.385 
                8.816 3.6.245 11.626.246 15.23 
                0 3.897-.266 4.356-2.62 
                4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 
                12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="hover:text-blue-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 
                5.378 14.192 5 15.115 5h2.885V0h-3.808C10.596 
                0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom Footer Text */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hero.IO Apps House — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
