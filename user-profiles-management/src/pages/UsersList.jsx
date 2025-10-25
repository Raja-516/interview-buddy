import React, { useState } from "react";
import UserTable from "../components/UserTable";
import AddUserModal from "../components/AddUserModal";

export default function UsersList() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-8xl mx-auto p-6">
      {/* Header with Add User button */}
      <div className="flex justify-between items-center mb-4">
        <h1
  className="pl-6"
  style={{
    width: "42px",
    height: "24px",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0%",
  }}
>
  Users
</h1>

        <button
  className="mr-7 px-4 py-2 bg-[#6834FF] hover:bg-[#5329CC] text-white rounded-md flex items-center space-x-2 hover:bg-blue-700"
  onClick={() => setModalOpen(true)}
>
  {/* Plus SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
  <span>Add User</span>
</button>

      </div>

      {/* Users Table */}
      <UserTable />

      {/* Add User Modal */}
      <AddUserModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
