import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();
export const useUsers = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
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
