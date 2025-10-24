import React, { useState } from "react";

export default function ProfileTabs({ tabs, onTabChange }) {
  const [active, setActive] = useState(tabs[0]);

  const handleClick = (tab) => {
    setActive(tab);
    if (onTabChange) onTabChange(tab);
  };

  return (
    <div className="flex border-b border-gray-200 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`px-4 py-2 -mb-px border-b-2 font-medium ${
            active === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
