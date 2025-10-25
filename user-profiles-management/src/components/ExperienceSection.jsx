import { useState } from "react";
import { Pencil, Save, X } from "lucide-react";

export default function ExperienceSection({ data, onSave }) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    experiences:
      data.experiences && data.experiences.length > 0
        ? data.experiences
        : [{ domain: "Example Domain", subdomain: "", years: "" }], // dummy domain
    linkedin: data.linkedin || "",
    resume: null, // Not saved to localStorage
  });

  const handleChange = (index, field, value) => {
    const updated = [...form.experiences];
    updated[index][field] = value;
    setForm({ ...form, experiences: updated });
  };

  const handleSubmit = () => {
    const saveData = { ...form };
    delete saveData.resume; // exclude resume from saving
    onSave(saveData);
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
        {!editMode && (
          <button
            onClick={() => setEditMode(true)}
            className="text-violet-600 hover:text-blue-800"
          >
            <Pencil className="w-5 h-5" />
          </button>
        )}
      </div>

      {form.experiences.map((exp, i) => (
        <div key={i} className="mb-4 space-y-2">
          {/* Domain full width */}
          <input
            placeholder="Domain"
            value={exp.domain}
            onChange={(e) => handleChange(i, "domain", e.target.value)}
            disabled={!editMode}
            className="border rounded-md p-2 w-full bg-gray-100"
          />
          {/* Sub-domain + Experience */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Sub-domain"
              value={exp.subdomain}
              onChange={(e) => handleChange(i, "subdomain", e.target.value)}
              disabled={!editMode}
              className="border rounded-md p-2 w-full bg-gray-100"
            />
            <input
              placeholder="Experience (yrs)"
              value={exp.years}
              onChange={(e) => handleChange(i, "years", e.target.value)}
              disabled={!editMode}
              className="border rounded-md p-2 w-full bg-gray-100"
            />
          </div>
        </div>
      ))}

      {editMode && (
        <button onClick={addRow} className="text-blue-600 text-sm font-medium mb-4">
          + Add Another
        </button>
      )}

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input
          placeholder="LinkedIn URL"
          value={form.linkedin}
          disabled={!editMode}
          onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
          className="border rounded-md p-2 w-full bg-gray-100"
        />
        <input
          type="file"
          accept=".pdf"
          disabled={!editMode}
          onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
          className="border rounded-md p-2 w-full bg-gray-100"
        />
      </div>

      {editMode && (
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={() => setEditMode(false)}
            className="flex items-center gap-2 px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
          >
            <X size={16} /> Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Save size={16} /> Save
          </button>
        </div>
      )}
    </div>
  );
}
