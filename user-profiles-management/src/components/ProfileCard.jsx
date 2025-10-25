import React from "react";

export default function ProfileCard({ user }) {
  if (!user) return <div>Loading...</div>;

  const firstName = user.firstName || "Unknown";
  const lastName = user.lastName || "";
  const email = user.email || "No email";
  const phone = user.phone || "No phone";
  const profileImage = user.profile || "https://via.placeholder.com/120";

  return (
   <div className="bg-white rounded-lg shadow flex items-center gap-[80px] p-[20px_32px] w-[1140px] min-h-[205px]">
  <img
    src={profileImage}
    alt="Profile"
    className="w-28 h-28 rounded-full border"
  />
  <div className="flex flex-col w-[732.5px] h-full gap-1">
  <h2 className="font-semibold text-[28px] leading-[150%] tracking-[0%] font-sans">
  {firstName} {lastName}
</h2>

  <p className="text-gray-600 text-sm">{email} <button className="p-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M10 1H2a1 1 0 0 0-1 1v10h1V2h8V1z"/>
    <path d="M14 3H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6 4h8v10H6V4z"/>
  </svg>
</button>
</p>
  <p className="text-gray-700 text-medium">{phone}</p>
</div>

</div>

  );
}
