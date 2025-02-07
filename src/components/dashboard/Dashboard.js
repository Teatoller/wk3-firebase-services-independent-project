import React from "react";
import { Button } from "../helpers";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Bio from "../bio/Bio";
import "../../Styles.css";

export default function Dashboard({
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
}) {
  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <Button className="btn logout-btn" onClick={handleLogout}>
        Logout
      </Button>
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
