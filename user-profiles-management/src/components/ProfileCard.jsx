import React from "react";

export default function ProfileCard({ user }) {
  if (!user) return <div>Loading...</div>;

  const firstName = user.firstName || "Unknown";
  const lastName = user.lastName || "";
  const email = user.email || "No email";
  const phone = user.phone || "No phone";
  const profileImage = user.profile || "https://via.placeholder.com/120";

  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center gap-6">
      <img
        src={profileImage}
        alt="Profile"
        className="w-28 h-28 rounded-full border"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-semibold">{firstName} {lastName}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-700 mt-1">Phone: {phone}</p>
      </div>
    </div>
  );
}
