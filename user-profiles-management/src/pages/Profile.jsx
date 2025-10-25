import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import ProfileCard from "../components/ProfileCard";
import ProfileTabs from "../components/ProfileTabs";
import EducationSkills from "../components/EducationSkills";
import { Pencil, Save, X } from "lucide-react";

export default function Profile() {
  const { id } = useParams();
  const { users, setUsers } = useUsers();
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("Basic Info");
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    const user = users.find((u) => u.id.toString() === id);
    if (user) {
      setProfile(user);
      setForm(user);
    }
  }, [id, users]);

  if (!profile) return <div>User not found</div>;

  // Save Basic Info
  const handleBasicSave = () => {
    const updatedUsers = users.map((u) =>
      u.id.toString() === id ? form : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setProfile(form);
    setEditMode(false);
  };

  // Save Education/Skills
  const handleEduSave = (updatedData) => {
    const updatedProfile = { ...profile, ...updatedData };
    const updatedUsers = users.map((u) =>
      u.id.toString() === id ? updatedProfile : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setProfile(updatedProfile);
  };

  const fields = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Email", name: "email" },
    
    { label: "Year of Birth", name: "yearOfBirth" },
    { label: "Gender", name: "gender" },
    { label: "Phone", name: "phone" },
    { label: "Alternate Phone", name: "altPhone" },
    { label: "Address", name: "address" },
    { label: "Pincode", name: "pincode" },
    { label: "State", name: "state" },
    { label: "Country", name: "country" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <ProfileCard user={profile} />

      <ProfileTabs
        tabs={["Basic Info", "Education & Skills"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* -------- BASIC INFO -------- */}
      {activeTab === "Basic Info" && (
        <div className="bg-white p-6 rounded-lg shadow mt-4 relative">
          {/* Header + Edit Icon */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Basic Information
            </h3>
            {!editMode && (
              <button
                onClick={() => setEditMode(true)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Pencil className="w-5 h-5" />
              </button>
            )}
          </div>

          {editMode ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-gray-600 mb-1">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={form[field.name] || ""}
                    onChange={(e) =>
                      setForm({ ...form, [field.name]: e.target.value })
                    }
                    className="border p-2 rounded w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div className="flex justify-end gap-3 col-span-full mt-4">
                <button
                  onClick={() => {
                    setEditMode(false);
                    setForm(profile);
                  }}
                  className="flex items-center gap-2 px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
                >
                  <X className="w-4 h-4" /> Cancel
                </button>
                <button
                  onClick={handleBasicSave}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  <Save className="w-4 h-4" /> Save
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fields.map((field, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-gray-500 font-medium">
                    {field.label}
                  </span>
                  <span className="text-gray-800">
                    {profile[field.name] || "—"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* -------- EDUCATION & SKILLS -------- */}
      {activeTab === "Education & Skills" && (
        <EducationSkills
          education={profile.education}
          skills={profile.skills}
          onSave={handleEduSave}
        />
      )}
    </div>
  );
}
