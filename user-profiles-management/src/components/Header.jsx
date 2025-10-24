import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useUsers } from "../context/UserContext.jsx"; // ✅ named import

export default function Header() {
  const { users } = useUsers();
  const location = useLocation();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src='#' alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-xl text-gray-800">User Management</span>
        </Link>
        <nav className="space-x-4">
          <Link
            to="/"
            className={`font-medium px-3 py-2 rounded hover:bg-gray-100 ${
              location.pathname === "/" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
            }`}
          >
            Users ({users.length})
          </Link>
        </nav>
      </div>
    </header>
  );
}
