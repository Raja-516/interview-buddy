import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Use named import
import { UserProvider } from "./context/UserContext.jsx";  

import UsersList from "./pages/UsersList";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
