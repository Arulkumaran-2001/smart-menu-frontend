import React from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6">
      <div className="text-xl font-semibold tracking-wide">
        Smart Menu System
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-right leading-tight">
            <span className="font-medium">{user.name}</span>
            <span className="text-sm text-gray-500">{user.role}</span>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Topbar;
