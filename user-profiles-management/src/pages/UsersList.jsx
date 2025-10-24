import React, { useState } from "react";
import UserTable from "../components/UserTable";
import AddUserModal from "../components/AddUserModal";

export default function UsersList() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setModalOpen(true)}
        >
          Add User
        </button>
      </div>

      <UserTable />

      <AddUserModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
