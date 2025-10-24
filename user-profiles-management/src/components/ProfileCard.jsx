import React from "react";
import profileDefault from "../assets/profile-default.png";

export default function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <div className="bg-white rounded-lg shadow-md mx-4 mt-1 p-4 h-[30vh] flex items-center">
      {/* Flex container: avatar on left, info on right */}
      <div className="flex items-center w-full">
        {/* Avatar */}
        {user.avatar ? (
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 rounded-full mr-4"
      />
    ) : (
      <svg
  className="w-24 h-24 rounded-full mr-4 p-1"
  viewBox="0 0 128 128"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Background circle - light violet */}
  <circle cx="64" cy="64" r="64" fill="#F3E8FF" />

  {/* Head - violet with border */}
  <circle cx="64" cy="44" r="16" fill="none" stroke="#7C3AED" strokeWidth="2" />

  {/* Shoulders - violet with border */}
  <path
    d="M20 108c0-24 44-28 44-28s44 4 44 28H20z"
    fill="none"
    stroke="#7C3AED"
    strokeWidth="2"
  />
</svg>
    )}

        {/* User info */}
        <div className="flex flex-col ml-10 justify-center space-y-1">
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email} <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-4 h-4 text-gray-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H9l-4 4v10a2 2 0 002 2z"
  />
</svg>
</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      </div>
    </div>
  );
}
