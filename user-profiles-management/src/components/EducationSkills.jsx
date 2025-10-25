import React, { useState, useEffect } from "react";

export default function EducationSkills({ education = [], skills = [], onSave }) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    education: Array.isArray(education) ? education.join(", ") : education,
    skills: Array.isArray(skills) ? skills.join(", ") : skills
  });

  useEffect(() => {
    setForm({
      education: Array.isArray(education) ? education.join(", ") : education,
      skills: Array.isArray(skills) ? skills.join(", ") : skills
    });
  }, [education, skills]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (onSave) onSave({
      education: form.education.split(",").map(s => s.trim()),
      skills: form.skills.split(",").map(s => s.trim())
    });
    setEditMode(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-4">
      {editMode ? (
        <div className="space-y-4">
          <textarea
            name="education"
            value={form.education}
            onChange={handleChange}
            placeholder="Education (comma-separated)"
            className="border p-2 rounded w-full"
          />
          <textarea
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Skills (comma-separated)"
            className="border p-2 rounded w-full"
          />
          <div className="flex gap-2">
            <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
            <button onClick={() => setEditMode(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <p><strong>Education:</strong> {form.education || "Not provided"}</p>
          <p><strong>Skills:</strong> {form.skills || "Not provided"}</p>
          <button onClick={() => setEditMode(true)} className="text-blue-600 hover:underline mt-2">Edit</button>
        </div>
      )}
    </div>
  );
}
