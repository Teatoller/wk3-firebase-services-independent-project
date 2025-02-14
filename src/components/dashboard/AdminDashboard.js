import React from "react";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Bio from "../bio/Bio";

export default function AdminDashboard({
  handleLogout,
  addProject,
  newProject,
  projects,
  setNewProject,
  skills,
  setSkills,
  newSkill,
  setNewSkill,
  addSkill,
  bio,
  setBio,
  updateBio,
  deleteProject,
  deleteSkill,
  editProject,
  editSkill,
  user,
  auth,
  role,
}) {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>Welcome, Admin! You have special privileges.</p>
      <Bio bio={bio} setBio={setBio} updateBio={updateBio} />
      <Projects
        addProject={addProject}
        newProject={newProject}
        projects={projects}
        setNewProject={setNewProject}
        deleteProject={deleteProject}
        editProject={editProject}
      />
      <Skills
        skills={skills}
        setSkills={setSkills}
        newSkill={newSkill}
        setNewSkill={setNewSkill}
        addSkill={addSkill}
        deleteSkill={deleteSkill}
        editSkill={editSkill}
      />
    </div>
  );
}
