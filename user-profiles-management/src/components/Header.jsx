  import React from "react";
  import { Link, useLocation } from "react-router-dom";
  import { useUsers } from "../context/UserContext.jsx";
  import { Bell, Headset } from "lucide-react";

  export default function Header() {
    const { users } = useUsers();
    const location = useLocation();

    // Example: first user as current
    const currentUser = users[0] || {};

    // Inline SVG default avatar
    const DefaultAvatar = (
      <svg
        className="w-12 h-12 text-gray-400" 
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        />
      </svg>
    );


    return (
      <header className="bg-white shadow-md">
        <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="#" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-xl text-gray-800">User Management</span>
          </Link>

          {/* Right side: help, notifications, profile */}
          <div className="flex items-center space-x-4">
            

            <button className="p-2 rounded hover:bg-gray-100">
              <Headset className="w-5 h-5 text-gray-600" />
            </button>

            <button className="p-2 rounded hover:bg-gray-100 relative">
              <Bell className="w-5 h-5 text-gray-600" />
              
            </button>

            {/* Profile avatar */}
            <Link to={`/profile/${currentUser.id || 0}`}>
    {currentUser.profile ? (
      <img
        src={currentUser.profile}
        alt="Profile"
        className="w-12 h-12 rounded-full"
      />
    ) : (
      DefaultAvatar
    )}
  </Link>

          </div>
        </div>
      </header>
    );
  }
