import React from "react";

export default function EducationSkills({ education = [], skills = [] }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-lg mb-2">Education</h3>
        {education.length ? (
          <ul className="list-disc list-inside">
            {education.map((edu, i) => (
              <li key={i}>{edu}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No education info available.</p>
        )}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">Skills</h3>
        {skills.length ? (
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <li key={i} className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No skills info available.</p>
        )}
      </div>
    </div>
  );
}
