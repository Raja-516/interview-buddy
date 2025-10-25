import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();
export const useUsers = () => useContext(UserContext);

const defaultUsers = [
  {
    id: 1,
    firstName: "Alice",
    name:"Alice",
    lastName: "Johnson",
    email: "alice@example.com",
    phone: "+91 9876543210",
    altPhone: "",
    yearOfBirth: "1996",
    gender: "Female",
    address: "123 Park Avenue, Mumbai",
    pincode: "400001",
    state: "Maharashtra",
    country: "India",
    profile: "",
    education: ["B.Sc in Computer Science"],
    skills: ["React", "TailwindCSS"],
    experiences: [
      {
        role: "Frontend Developer",
        company: "Tech Corp",
        duration: "Jan 2022 - Present",
        description: "Built user profile management UI"
      }
    ]
  },
  {
    id: 2,
    firstName: "Bob",
    name:"Bob",
    lastName: "Smith",
    email: "bob@example.com",
    phone: "+91 9823456789",
    altPhone: "",
    yearOfBirth: "1993",
    gender: "Male",
    address: "45 Residency Road, Bangalore",
    pincode: "560001",
    state: "Karnataka",
    country: "India",
    profile: "",
    education: ["M.Tech in Software Engineering"],
    skills: ["Node.js", "MongoDB"],
    experiences: []
  }
];

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length > 0) setUsers(storedUsers);
    else setUsers(defaultUsers);
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => setUsers([...users, user]);
  const deleteUser = (id) => setUsers(users.filter((u) => u.id !== id));

  return (
    <UserContext.Provider value={{ users, setUsers, addUser, deleteUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
