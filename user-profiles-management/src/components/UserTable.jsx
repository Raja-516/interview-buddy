import React from "react";
import { Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function UserTable() {
  const { users, deleteUser } = useUsers();

  return (
    <div className="overflow-x-auto px-6 mt-4">
      <div className="border border-gray-300 rounded-lg bg-white">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-small text-gray-500">
            <th
  className="px-6 py-3 w-16 text-center"
  style={{
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "20px",
    letterSpacing: "0%",
  }}
>
  Sr. No
</th>

             <th
  className="px-6 py-3"
  style={{
    width: "376px",
    height: "20px",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "20px",
    letterSpacing: "0%",
  }}
>
  Username
</th>

              <th
  className="px-6 py-3"
  style={{
    width: "592px",
    height: "20px",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "20px",
    letterSpacing: "0%",
  }}
>
  E-mail
</th>

              <th
  className="px-6 py-3 text-center"
  style={{
    width: "96px",
    height: "20px",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "20px",
    letterSpacing: "0%",
  }}
>
  Actions
</th>

            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No users found. Add one!
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition-colors last:border-b-0"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 flex justify-center items-center space-x-3">
                    <Link
                      to={`/profile/${user.id}`}
                      className="text-gray-500 hover:text-gray-700"
                      title="View"
                    >
                      <Eye size={18} />
                    </Link>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => deleteUser(user.id)}
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
