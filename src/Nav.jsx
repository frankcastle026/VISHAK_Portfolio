import React, { useState } from "react";

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Logo on the left top */}
      <div className="fixed top-4 left-4 z-50">
        <a href="#" className="hover:underline">
          <img
            src="./DJ VISHAK BUSINESS CARD.png"  // Static logo
            className="h-10"
            alt="Logo"
          />
        </a>
      </div>

      {/* Sidebar Toggle Button on the right top */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          className="text-white focus:outline-none" 
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Sidebar</h2>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="mt-4 space-y-4 px-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
