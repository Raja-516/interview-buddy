import React, { useState, useEffect } from "react";
import { Pencil, Save, X } from "lucide-react";

export default function EducationSkills({ education = {}, skills = {}, onSave }) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    college: education.college || "",
    degree: education.degree || "",
    course: education.course || "",
    year: education.year || "",
    grade: education.grade || "",
    skillsList: skills.skillsList ? skills.skillsList.join(", ") : "",
    projects: skills.projects ? skills.projects.join(", ") : "",
  });

  useEffect(() => {
    setForm({
      college: education.college || "",
      degree: education.degree || "",
      course: education.course || "",
      year: education.year || "",
      grade: education.grade || "",
      skillsList: skills.skillsList ? skills.skillsList.join(", ") : "",
      projects: skills.projects ? skills.projects.join(", ") : "",
    });
  }, [education, skills]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedData = {
      education: {
        college: form.college,
        degree: form.degree,
        course: form.course,
        year: form.year,
        grade: form.grade,
      },
      skills: {
        skillsList: form.skillsList.split(",").map((s) => s.trim()),
        projects: form.projects.split(",").map((p) => p.trim()),
      },
    };

    if (onSave) onSave(updatedData);

    // Save to localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = storedUsers.map((user) =>
      user.id === education.id ? { ...user, ...updatedData } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setEditMode(false);
  };

  // A helper to render fields in same layout for display mode
  const DisplayField = ({ label, value }) => (
    <div className="flex flex-col">
      <label className="text-gray-500 text-sm">{label}</label>
      <div className="border p-2 rounded w-full bg-gray-50 text-sm min-h-[38px]">{value || "Not provided"}</div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-4 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Education & Skills</h3>
        {!editMode && (
          <button
            onClick={() => setEditMode(true)}
            className="text-violet-600 hover:text-blue-800"
          >
            <Pencil className="w-5 h-5" />
          </button>
        )}
      </div>

      {editMode ? (
        <div className="space-y-4">
          {/* Education Section */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-600">Education</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DisplayField label="College" value={form.college} />
              <DisplayField label="Degree" value={form.degree} />
              <DisplayField label="Course" value={form.course} />
              <DisplayField label="Year" value={form.year} />
              <DisplayField label="Grade" value={form.grade} />
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-2 mt-4">
            <h4 className="font-medium text-gray-600">Skills</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DisplayField label="Skills" value={form.skillsList} />
              <DisplayField label="Projects" value={form.projects} />
            </div>
          </div>

          {/* Save / Cancel */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={() => setEditMode(false)}
              className="flex items-center gap-2 px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <Save className="w-4 h-4" /> Save
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Education Display */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-600">Education</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DisplayField label="College" value={form.college} />
              <DisplayField label="Degree" value={form.degree} />
              <DisplayField label="Course" value={form.course} />
              <DisplayField label="Year" value={form.year} />
              <DisplayField label="Grade" value={form.grade} />
            </div>
          </div>

          {/* Skills Display */}
          <div className="space-y-2 mt-4">
            <h4 className="font-medium text-gray-600">Skills</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DisplayField label="Skills" value={form.skillsList} />
              <DisplayField label="Projects" value={form.projects} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
