import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();
export const useUsers = () => useContext(UserContext);

// Default users to display initially
const defaultUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    profile: "", // leave empty to use default SVG
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    profile: "",
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    profile: "",
  },
];

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length > 0) {
      setUsers(storedUsers);
    } else {
      setUsers(defaultUsers); // load default users if nothing in localStorage
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => setUsers([...users, user]);
  const deleteUser = (id) => setUsers(users.filter((u) => u.id !== id));

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
