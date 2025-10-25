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
  className={`relative h-8 px-4 py-[6px] text-gray-400 rounded-md bg-gray-100 text-sm font-medium 
    transition-colors duration-200 
    ${isActive ? "text-violet-600 " : "text-gray-500 hover:bg-violet-100"}`}
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
