import React from "react";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Bio from "../bio/Bio";

export default function UserDashboard({
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
      <h2>User Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <p>Welcome, User! You can manage your profile here.</p>

      <Bio bio={bio} setBio={setBio} updateBio={updateBio} role={role} />
      <Projects
        addProject={addProject}
        newProject={newProject}
        projects={projects}
        setNewProject={setNewProject}
        deleteProject={deleteProject}
        editProject={editProject}
        role={role}
      />
      <Skills
        skills={skills}
        setSkills={setSkills}
        newSkill={newSkill}
        setNewSkill={setNewSkill}
        addSkill={addSkill}
        deleteSkill={deleteSkill}
        editSkill={editSkill}
        role={role}
      />
    </div>
  );
}
