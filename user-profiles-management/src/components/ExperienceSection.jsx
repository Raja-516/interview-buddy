import React from "react";

export default function ExperienceSection({ experiences = [] }) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg mb-2">Experience</h3>
      {experiences.length ? (
        <ul className="space-y-2">
          {experiences.map((exp, i) => (
            <li key={i} className="border p-3 rounded bg-gray-50">
              <h4 className="font-medium">{exp.role} - {exp.company}</h4>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No experience available.</p>
      )}
    </div>
  );
}
