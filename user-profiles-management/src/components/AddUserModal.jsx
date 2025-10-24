import React, { useState } from "react";
import { useUsers } from "../context/UserContext";

export default function AddUserModal({ isOpen, onClose }) {
  const { addUser } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null; // modal not visible when closed

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Name and Email are required");

    const newUser = {
      id: Date.now(),
      name,
      email,
      about: "",
      education: [],
      skills: [],
      experiences: [],
    };

    addUser(newUser);
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full p-2 border rounded"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full p-2 border rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-end space-x-2 mt-2">
            <button
              type="button"
              className="px-4 py-2 border rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
