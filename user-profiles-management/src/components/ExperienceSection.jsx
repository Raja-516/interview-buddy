import { useState } from "react";
import { Pencil, Save, X } from "lucide-react";

export default function ExperienceSection({ data, onSave }) {
  const [form, setForm] = useState({
    experiences:
      data.experiences && data.experiences.length > 0
        ? data.experiences
        : [{ domain: "", subdomain: "", years: "" }],
    linkedin: data.linkedin || "",
    resume: null,
  });

  const [editSection, setEditSection] = useState(null);
  const [backup, setBackup] = useState(null); // Backup for cancel

  const handleChange = (index, field, value) => {
    const updated = [...form.experiences];
    updated[index][field] = value;
    setForm({ ...form, experiences: updated });
  };

  const handleSave = (section) => {
    const saveData = { ...form };
    delete saveData.resume;
    onSave(saveData);
    setEditSection(null);
    setBackup(null);
  };

  const handleEdit = (section) => {
    setBackup(JSON.parse(JSON.stringify(form))); // backup current data
    setEditSection(section);
  };

  const handleCancel = () => {
    if (backup) setForm(backup);
    setEditSection(null);
    setBackup(null);
  };

  const addRow = () => {
    setForm({
      ...form,
      experiences: [...form.experiences, { domain: "", subdomain: "", years: "" }],
    });
  };

  return (
    <div className="space-y-6">
      {/* ================= WORK EXPERIENCE SECTION ================= */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Work Experience</h3>
          {editSection !== "experience" && (
            
            <button
   onClick={() => handleEdit("experience")}
  className="bg-gray-200 hover:bg-gray-300 text-violet-600 flex items-center justify-center w-8 h-8 gap-2 rounded"
>
  <Pencil className="w-4 h-4" /> {/* Increased from 11.2px (~w-[11.2px]) to 16px (w-4) */}
</button>


          )}
        </div>

        {form.experiences.map((exp, i) => (
          <div key={i} className="mb-6 space-y-3 border-b pb-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Domain</label>
              <input
                value={exp.domain}
                onChange={(e) => handleChange(i, "domain", e.target.value)}
                disabled={editSection !== "experience"}
                placeholder="e.g. Software Development"
                className="border rounded-md text-gray-500 p-2 w-full bg-gray-100"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Sub-domain
                </label>
                <input
                  value={exp.subdomain}
                  onChange={(e) => handleChange(i, "subdomain", e.target.value)}
                  disabled={editSection !== "experience"}
                  className="border rounded-md text-gray-500 p-2 w-full bg-gray-100"
                  placeholder="e.g. Frontend, Backend"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Experience (in years)
                </label>
                <input
                  value={exp.years}
                  onChange={(e) => handleChange(i, "years", e.target.value)}
                  disabled={editSection !== "experience"}
                  className="border rounded-md text-gray-500 p-2 w-full bg-gray-100"
                  placeholder="e.g. 2"
                />
              </div>
            </div>
          </div>
        ))}

        {editSection === "experience" && (
          <>
            <button
              onClick={addRow}
              className="text-blue-600 text-sm font-medium mb-4 hover:underline"
            >
              + Add Another
            </button>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              >
                <X size={16} /> Cancel
              </button>
              <button
                onClick={() => handleSave("experience")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Save size={16} /> Save
              </button>
            </div>
          </>
        )}
      </div>

      {/* ================= LINKEDIN + RESUME SIDE BY SIDE ================= */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* LinkedIn Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            {editSection !== "linkedin" && (
              <button
   onClick={() => handleEdit("linkedin")}
  className="bg-gray-200 hover:bg-gray-300 text-violet-600 flex items-center justify-center w-8 h-8 gap-2 rounded"
>
  <Pencil className="w-4 h-4" /> {/* Increased from 11.2px (~w-[11.2px]) to 16px (w-4) */}
</button>

            )}
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              LinkedIn URL
            </label>
            <input
              value={form.linkedin}
              disabled={editSection !== "linkedin"}
              onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
              className="border rounded-md p-2 text-gray-500 w-full bg-gray-100"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          {editSection === "linkedin" && (
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              >
                <X size={16} /> Cancel
              </button>
              <button
                onClick={() => handleSave("linkedin")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Save size={16} /> Save
              </button>
            </div>
          )}
        </div>

        {/* Resume Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Resume</h3>
            {editSection !== "resume" && (
              <button
   onClick={() => handleEdit("resume")}
  className="bg-gray-200 hover:bg-gray-300 text-violet-600 flex items-center justify-center w-8 h-8 gap-2 rounded"
>
  <Pencil className="w-4 h-4" /> {/* Increased from 11.2px (~w-[11.2px]) to 16px (w-4) */}
</button>

            )}
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Upload Resume (PDF only)
            </label>
            <input
              type="file"
              accept=".pdf"
              disabled={editSection !== "resume"}
              onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
              className="border text-gray-500 rounded-md p-2 w-full bg-gray-100"
            />
          </div>

          {editSection === "resume" && (
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              >
                <X size={16} /> Cancel
              </button>
              <button
                onClick={() => handleSave("resume")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Save size={16} /> Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
