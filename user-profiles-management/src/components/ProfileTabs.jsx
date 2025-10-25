import React from "react";

export default function ProfileTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex gap-2 mt-6 mb-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        const alwaysDot = ["education & skills",].includes(tab.toLowerCase());

        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              relative px-4 py-2 rounded-lg bg-gray-200 font-medium transition
              ${isActive ? "text-violet-600" : "text-gray-700 hover:bg-gray-300"}
            `}
          >
            {tab}
            {alwaysDot && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
        );
      })}
    </div>
  );
}
