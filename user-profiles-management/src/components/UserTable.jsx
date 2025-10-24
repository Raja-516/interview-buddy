import React from "react";
import { Trash2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function UserTable() {
  const { users, deleteUser } = useUsers();
  const navigate = useNavigate();

  if (!users.length)
    return <p className="text-center text-gray-500">No users found. Add one!</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left font-medium">Name</th>
            <th className="py-2 px-4 text-left font-medium">Email</th>
            <th className="py-2 px-4 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="flex items-center px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </button>
                <button
                  onClick={() => navigate(`/profile/${user.id}`)}
                  className="flex items-center px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  <Eye className="w-4 h-4 mr-1" /> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
