import { useState } from "react";
import { Pencil } from "lucide-react";

export default function ExperienceSection({ data, onSave }) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    experiences: data.experiences || [
      { domain: "", subdomain: "", years: "" },
    ],
    linkedin: data.linkedin || "",
    resume: data.resume || "",
  });

  const handleChange = (index, field, value) => {
    const updated = [...form.experiences];
    updated[index][field] = value;
    setForm({ ...form, experiences: updated });
  };

  const handleSubmit = () => {
    onSave(form);
    setEditMode(false);
  };

  const addRow = () => {
    setForm({
      ...form,
      experiences: [...form.experiences, { domain: "", subdomain: "", years: "" }],
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Work Experience</h3>
        <button
          className="text-gray-500 hover:text-blue-600"
          onClick={() => setEditMode(!editMode)}
        >
          <Pencil size={18} />
        </button>
      </div>

      {form.experiences.map((exp, i) => (
        <div key={i} className="grid md:grid-cols-3 gap-4 mb-3">
          <input
            placeholder="Domain"
            value={exp.domain}
            disabled={!editMode}
            onChange={(e) => handleChange(i, "domain", e.target.value)}
            className="border rounded-md p-2"
          />
          <input
            placeholder="Sub-domain"
            value={exp.subdomain}
            disabled={!editMode}
            onChange={(e) => handleChange(i, "subdomain", e.target.value)}
            className="border rounded-md p-2"
          />
          <input
            placeholder="Experience (yrs)"
            value={exp.years}
            disabled={!editMode}
            onChange={(e) => handleChange(i, "years", e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
      ))}

      {editMode && (
        <button
          onClick={addRow}
          className="text-blue-600 text-sm font-medium mb-4"
        >
          + Add Another
        </button>
      )}

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input
          placeholder="LinkedIn URL"
          value={form.linkedin}
          disabled={!editMode}
          onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
          className="border rounded-md p-2"
        />
        <input
          placeholder="Resume File Link"
          value={form.resume}
          disabled={!editMode}
          onChange={(e) => setForm({ ...form, resume: e.target.value })}
          className="border rounded-md p-2"
        />
      </div>

      {editMode && (
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
