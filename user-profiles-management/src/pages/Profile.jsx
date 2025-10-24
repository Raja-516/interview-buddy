import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import ProfileCard from "../components/ProfileCard";
import ProfileTabs from "../components/ProfileTabs";
import EducationSkills from "../components/EducationSkills";
import ExperienceSection from "../components/ExperienceSection";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

export default function Profile() {
  const { id } = useParams();
  const { users, loading } = useUsers();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("About");

  if (loading) return <Loader />;

  const user = users.find(u => u.id.toString() === id);
  if (!user) return <ErrorState message="User not found" />;

  // Example static data if user object has no fields yet
  const education = user.education || ["B.Sc in Computer Science"];
  const skills = user.skills || ["React", "TailwindCSS"];
  const experiences = user.experiences || [
    {
      role: "Frontend Developer",
      company: "Tech Corp",
      duration: "Jan 2022 - Present",
      description: "Worked on building user profile management UI."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 mb-4"
      >
        &larr; Back
      </button>

      <ProfileCard user={user} />

      <ProfileTabs
        tabs={["About", "Education & Skills", "Experience"]}
        onTabChange={setActiveTab}
      />

      {activeTab === "About" && (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg">About</h3>
          <p className="mt-2 text-gray-700">{user.about || "No about info available."}</p>
        </div>
      )}

      {activeTab === "Education & Skills" && (
        <EducationSkills education={education} skills={skills} />
      )}

      {activeTab === "Experience" && (
        <ExperienceSection experiences={experiences} />
      )}
    </div>
  );
}
