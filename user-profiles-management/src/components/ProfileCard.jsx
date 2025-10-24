import React from "react";
import profileDefault from "../assets/profile-default.png";

export default function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar || profileDefault}
          alt={user.name}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}
