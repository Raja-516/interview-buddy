import React, { useState, useEffect } from "react";
import { Pencil, Save, X } from "lucide-react";

export default function EducationSkills({ education = {}, skills = {}, onSave }) {
  const [editModeEdu, setEditModeEdu] = useState(false);
  const [editModeSkills, setEditModeSkills] = useState(false);

  const [form, setForm] = useState({
    college: education.college || "",
    degree: education.degree || "",
    course: education.course || "",
    year: education.year || "",
    grade: education.grade || "",
    skillsList: skills.skillsList ? skills.skillsList.join(", ") : "",
    projects: skills.projects ? skills.projects.join(", ") : "",
  });

  // Update when props change
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Save Education
  const saveEducation = () => {
    const updatedEducation = {
      college: form.college,
      degree: form.degree,
      course: form.course,
      year: form.year,
      grade: form.grade,
    };
    if (onSave) onSave({ education: updatedEducation });
    setEditModeEdu(false);
  };

  // Cancel Education Edit
  const cancelEducation = () => {
    // Reset form to original education data
    setForm((prev) => ({
      ...prev,
      college: education.college || "",
      degree: education.degree || "",
      course: education.course || "",
      year: education.year || "",
      grade: education.grade || "",
    }));
    setEditModeEdu(false);
  };

  // Save Skills
  const saveSkills = () => {
    const updatedSkills = {
      skillsList: form.skillsList.split(",").map((s) => s.trim()),
      projects: form.projects.split(",").map((p) => p.trim()),
    };
    if (onSave) onSave({ skills: updatedSkills });
    setEditModeSkills(false);
  };

  // Cancel Skills Edit
  const cancelSkills = () => {
    // Reset form to original skills data
    setForm((prev) => ({
      ...prev,
      skillsList: skills.skillsList ? skills.skillsList.join(", ") : "",
      projects: skills.projects ? skills.projects.join(", ") : "",
    }));
    setEditModeSkills(false);
  };

  return (
    <div className="space-y-8 mt-4 max-w-5xl mx-auto">
      {/* EDUCATION CARD */}
      <div className="bg-white p-6 rounded-xl shadow-xl relative">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-gray-700 text-lg">Education Details</h4>
          {!editModeEdu && (
            <button
  onClick={() => setEditModeEdu(true)}
  className="bg-gray-200 hover:bg-gray-300 text-violet-600 flex items-center justify-center w-8 h-8 gap-2 rounded"
>
  <Pencil className="w-4 h-4" /> {/* Increased from 11.2px (~w-[11.2px]) to 16px (w-4) */}
</button>

          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* College */}
          <div>
            <label className="text-gray-500 text-sm">School / College</label>
            {editModeEdu ? (
              <input
                type="text"
                name="college"
                value={form.college}
                onChange={handleChange}
                className="border p-2 rounded text-gray-500 w-full bg-gray-100 text-sm"
              />
            ) : (
              <div className="border p-2 rounded text-gray-500 w-full bg-gray-50 text-sm">
                {form.college || "Not provided"}
              </div>
            )}
          </div>

          {/* Degree */}
          <div>
            <label className="text-gray-500 text-sm">Highest Degree or Equivalent</label>
            {editModeEdu ? (
              <input
                type="text"
                name="degree"
                value={form.degree}
                onChange={handleChange}
                className="border p-2 rounded text-gray-500 w-full bg-gray-100 text-sm"
              />
            ) : (
              <div className="border p-2 rounded text-gray-500 w-full bg-gray-50 text-sm">
                {form.degree || "Not provided"}
              </div>
            )}
          </div>

          {/* Course */}
          <div>
            <label className="text-gray-500 text-sm">Course</label>
            {editModeEdu ? (
              <input
                type="text"
                name="course"
                value={form.course}
                onChange={handleChange}
                className="border p-2 rounded text-gray-500 w-full bg-gray-100 text-sm"
              />
            ) : (
              <div className="border p-2 rounded text-gray-500 w-full bg-gray-50 text-sm">
                {form.course || "Not provided"}
              </div>
            )}
          </div>

          {/* Year + Grade */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-500 text-sm">Year of Completion</label>
              {editModeEdu ? (
                <input
                  type="text"
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  className="border p-2 rounded text-gray-500 w-full bg-gray-100 text-sm"
                />
              ) : (
                <div className="border p-2 rounded text-gray-500 w-full bg-gray-50 text-sm">
                  {form.year || "Not provided"}
                </div>
              )}
            </div>

            <div>
              <label className="text-gray-500 text-sm">Grade</label>
              {editModeEdu ? (
                <input
                  type="text"
                  name="grade"
                  value={form.grade}
                  onChange={handleChange}
                  className="border p-2 rounded text-gray-500 w-full bg-gray-100 text-sm"
                />
              ) : (
                <div className="border p-2 rounded text-gray-500 w-full bg-gray-50 text-sm">
                  {form.grade || "Not provided"}
                </div>
              )}
            </div>
          </div>
        </div>

        {editModeEdu && (
          <div className="flex justify-end gap-3 mt-2">
            <button
              onClick={cancelEducation}
              className="flex items-center gap-2 px-4 py-2 border rounded text-gray-500 hover:bg-gray-100"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
            <button
              onClick={saveEducation}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <Save className="w-4 h-4" /> Save
            </button>
          </div>
        )}
      </div>

      {/* SKILLS CARD */}
      <div className="bg-white p-6 rounded-xl shadow-xl relative">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-gray-700 text-lg">Skills & Projects</h4>
          {!editModeSkills && (
           <button
  onClick={() => setEditModeSkills(true)}
  className="bg-gray-200 hover:bg-gray-300 text-violet-600 flex items-center justify-center w-8 h-8 gap-2 rounded"
>
  <Pencil className="w-4 h-4" /> {/* Increased from 11.2px (~w-[11.2px]) to 16px (w-4) */}
</button>

          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Skills */}
          <div>
            <label className="text-gray-500 text-sm">Skills</label>
            {editModeSkills ? (
              <textarea
                name="skillsList"
                value={form.skillsList}
                onChange={handleChange}
                rows={4}
                className="border p-2 text-gray-500 rounded w-full bg-gray-100 text-sm resize-none"
              ></textarea>
            ) : (
              <div className="border p-2 text-gray-500 rounded w-full bg-gray-50 text-sm min-h-[100px]">
                {form.skillsList || "Not provided"}
              </div>
            )}
          </div>

          {/* Projects */}
          <div>
            <label className="text-gray-500 text-sm">Projects</label>
            {editModeSkills ? (
              <textarea
                name="projects"
                value={form.projects}
                onChange={handleChange}
                rows={4}
                className="border p-2 text-gray-500 rounded w-full bg-gray-100 text-sm resize-none"
              ></textarea>
            ) : (
              <div className="border p-2 text-gray-500 rounded w-full bg-gray-50 text-sm min-h-[100px]">
                {form.projects || "Not provided"}
              </div>
            )}
          </div>
        </div>

        {editModeSkills && (
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={cancelSkills}
              className="flex items-center gap-2 px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
            <button
              onClick={saveSkills}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <Save className="w-4 h-4" /> Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
