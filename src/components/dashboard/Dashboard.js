import React from "react";
import { Button } from "../helpers";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

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
}) {
  return (
    <div>
      <h2>User Dashboard</h2>
      <Button onClick={handleLogout}>Logout</Button>
      <Projects
        addProject={addProject}
        newProject={newProject}
        projects={projects}
        setNewProject={setNewProject}
      />
      <Skills
        skills={skills}
        setSkills={setSkills}
        newSkill={newSkill}
        setNewSkill={setNewSkill}
        addSkill={addSkill}
      />
    </div>
  );
}
