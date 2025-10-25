import React, { useState, useEffect } from "react";
import { Pencil, Save, X } from "lucide-react";
import ProfileCard from "../components/ProfileCard";
import ProfileTabs from "../components/ProfileTabs";
import EducationSkills from "../components/EducationSkills";
import { useUsers } from "../context/UserContext";
import { useParams } from "react-router-dom";
import ExperienceSection from "../components/ExperienceSection";

export default function Profile() {
  const { id } = useParams();
  const { users, setUsers } = useUsers();
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});
  const [activeTab, setActiveTab] = useState("Basic Info");

  const countries = {
    India: { code: "+91", states: ["Tamil Nadu", "Karnataka", "Maharashtra", "Delhi"] },
    USA: { code: "+1", states: ["California", "Texas", "Florida", "New York"] },
    UK: { code: "+44", states: ["England", "Scotland", "Wales"] },
  };

  useEffect(() => {
    const user = users.find((u) => u.id.toString() === id);
    if (user) {
      setProfile(user);
      setForm(user);
    }
  }, [id, users]);

  if (!profile) return <div>User not found</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBasicSave = () => {
    const updatedUsers = users.map((u) => (u.id.toString() === id ? form : u));
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setProfile(form);
    setEditMode(false);
  };

  const handleCancel = () => {
    setForm(profile);
    setEditMode(false);
  };

  const handleEduSave = (updatedData) => {
    const updatedProfile = { ...profile, ...updatedData };
    const updatedUsers = users.map((u) =>
      u.id.toString() === id ? updatedProfile : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setProfile(updatedProfile);
  };

  const phonePrefix = form.country ? countries[form.country]?.code || "" : "";

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Profile Card */}
      <ProfileCard user={profile} />

      {/* Tabs */}
      <ProfileTabs
        tabs={["Basic Info", "Education & Skills", "Experience"]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Basic Info */}
      {activeTab === "Basic Info" && (
        <div className="bg-white p-6 mt-5 rounded-lg shadow mt-4 relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold  text-gray-700">Basic Information</h3>
            {!editMode && (
              <button
  onClick={() => setEditMode(true)}
  className="bg-gray-200 hover:bg-gray-300 text-violet-600 flex items-center justify-center w-8 h-8 gap-2 rounded"
>
  <Pencil className="w-4 h-4" /> {/* Increased from 11.2px (~w-[11.2px]) to 16px (w-4) */}
</button>

            )}
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1 */}
            <div className="flex flex-col">
              <label className="text-gray-500 font-sm mb-1">Firstname</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName || ""}
                onChange={handleChange}
                disabled={!editMode}
                className={`border p-2 bg-gray-100 text-gray-500 font-small rounded w-full`}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-500 font-small mb-1">Lastname</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName || ""}
                onChange={handleChange}
                disabled={!editMode}
                className={`border p-2 bg-gray-100 text-gray-500 font-small rounded w-full`}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-500 font-small mb-1">Email ID</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
                disabled={!editMode}
                className={`border p-2 bg-gray-100 text-gray-500 font-small rounded w-full`}
              />
            </div>

            {/* Row 2 */}
            <div className="flex gap-4 text-sm">
              <div className="flex flex-col w-1/2">
                <label className="text-gray-500 font-small mb-1">Year of Birth</label>
                <input
                  type="text"
                  name="yearOfBirth"
                  value={form.yearOfBirth || ""}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`border p-1 bg-gray-100 text-gray-500 font-small rounded w-full`}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-gray-500 font-small mb-1">Gender</label>
                <select
                  name="gender"
                  value={form.gender || ""}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`border p-1 bg-gray-100 text-gray-500 font-small rounded w-full`}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 font-small mb-1">Phone number</label>
              <div className="flex items-center">
                <span className="px-2 text-gray-500">{phonePrefix}</span>
                <input
                  type="text"
                  name="phone"
                  value={form.phone || ""}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`border p-2 bg-gray-100 text-gray-500 font-small rounded w-full`}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 font-small mb-1">Alternate Phone no</label>
              <input
                type="text"
                name="altPhone"
                value={form.altPhone || ""}
                onChange={handleChange}
                disabled={!editMode}
                className={`border p-2 bg-gray-100 text-gray-500 font-small rounded w-full`}
              />
            </div>

            {/* Address textarea */}
            <div className="flex flex-col row-span-2">
              <label className="text-gray-500 font-small mb-1">Address</label>
              <textarea
                name="address"
                value={form.address || ""}
                onChange={handleChange}
                disabled={!editMode}
                rows={4}
                className={`border p-2 bg-gray-100 text-gray-500 font-small rounded w-full`}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 font-small mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={form.pincode || ""}
                onChange={handleChange}
                disabled={!editMode}
                className={`border p-2 bg-gray-100 text-gray-500 font-small rounded w-full`}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 font-small mb-1">Domicile State</label>
              <select
                name="state"
                value={form.state || ""}
                onChange={handleChange}
                disabled={!editMode || !form.country}
                className={`border p-2 bg-gray-100 text-gray-500 font-small rounded w-full`}
              >
                <option value="">Select</option>
                {form.country &&
                  countries[form.country].states.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-500 font-small mb-1">Domicile country</label>
              <select
                name="country"
                value={form.country || ""}
                onChange={handleChange}
                disabled={!editMode}
                className={`border p-2 bg-gray-100 text-gray-500 font-small rounded w-full`}
              >
                <option value="">Select</option>
                {Object.keys(countries).map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Save/Cancel Buttons */}
            {editMode && (
              <div className="md:col-span-3 flex justify-end mt-4 gap-2">
                <button
                  onClick={handleBasicSave}
                  className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  <Save size={16} /> Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-1 px-3 py-1 border rounded text-gray-700 hover:bg-gray-100"
                >
                  <X size={16} /> Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Education & Skills */}
      {activeTab === "Education & Skills" && (
        <EducationSkills
          education={profile.education}
          skills={profile.skills}
          onSave={handleEduSave}
        />
      )}
      {activeTab === "Experience" && (
        <ExperienceSection
          data={{
            experiences: profile.experiences || [],
            linkedin: profile.linkedin || "",
            resume: profile.resume || "",
          }}
          userId={profile.id}
          onSave={(updatedData) => {
            // Update the profile and localStorage
            const updatedProfile = { ...profile, ...updatedData };
            setProfile(updatedProfile);

            const updatedUsers = users.map((u) =>
              u.id.toString() === profile.id.toString() ? updatedProfile : u
            );
            setUsers(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
          }}
        />
      )}
    </div>
  );
}
