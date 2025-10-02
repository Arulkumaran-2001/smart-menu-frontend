import React from "react";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
  label: string;
  path: string;
}

const SidebarItem = ({ label, path }: SidebarItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="cursor-pointer p-2 rounded-md hover:bg-gray-200 mb-2 text-gray-700"
    >
      {label}
    </div>
  );
};

export default SidebarItem;
