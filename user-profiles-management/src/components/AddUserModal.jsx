import React, { useState } from "react";
import { useUsers } from "../context/UserContext";

export default function AddUserModal({ isOpen, onClose }) {
  const { addUser } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return alert("All fields are required");

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      about: "",
      education: [],
      skills: [],
      experiences: [],
    };

    addUser(newUser);
    setName("");
    setEmail("");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex justify-end">
  {/* Sidebar */}
  <div className="bg-white w-1/2 h-full shadow-lg p-6 flex flex-col">

    {/* Header */}
    <div className="flex justify-between items-center mb-4"
         style={{ boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" }}>
      <h2 className="text-xl font-semibold">Add User</h2>
      <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>✕</button>
    </div>

    {/* Form - make middle scrollable */}
    <div className="flex-1 overflow-y-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 h-full">
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-gray-500 mb-1">Name of the user</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Type here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email & Phone side by side */}
        <div className="flex space-x-2">
          <div className="flex-1 flex flex-col">
            <label className="text-gray-500 mb-1">E-mail</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="text-gray-500 mb-1">Contact</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Type here"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>

    {/* Buttons pinned at bottom */}
    <div className="flex justify-end space-x-2 mt-4 ">
      <button
        type="button"
        className="px-5 py-2 border rounded bg-violet-100 hover:bg-violet-200"
        onClick={onClose}
      >
        Cancel
      </button>
      <button
  type="submit"
  onClick={handleSubmit}
  className="bg-violet-600 text-white rounded-md hover:bg-violet-700 flex items-center justify-center"
  style={{
    width: "59px",       // Hug width
    height: "40px",      // Fixed height
    padding: "10px 16px",// Top/Bottom 10px, Left/Right 16px
    gap: "4px",          // Space between icon/text if any
    fontWeight: 400,     // Regular
    fontFamily: "'Nunito Sans', sans-serif"
  }}
>
  Add
</button>

    </div>
  </div>
</div>

  );
}
