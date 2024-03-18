import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx'
const Navbar = () => {
//   const [isDark, setIsDark] = useState(false);

  return (

    <header className='flex'>
      <nav className="flex items-center fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-white shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out">
      <Sidebar/>
        <div className="flex flex-1 justify-between p-4">
          <div className="text-[2rem] leading-[3rem] tracking-tight font-bold text-black dark:text-white font-serif">
            Mindfull Momentum
          </div>
          <div className="flex items-center space-x-4 text-lg font-semibold tracking-tight">

          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center mt-40">
        {/* <button
          onClick={toggleDarkMode}
          className="flex items-center px-5 py-3 font-semibold border text-black dark:bg-[#0c1015] rounded-lg bg-white border-black dark:border-black transition duration-700 dark:text-white"
        >
          {/* <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
              />
            </svg>
          </span> */}
          {/* Going {!isDark ? 'Dark' : 'Light'} */}
        {/* </button> */}
      </div>
    </header>
  );
};

export default Navbar;
