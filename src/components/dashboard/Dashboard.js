import React from "react";
import { Button } from "../helpers";
import Projects from "../projects/Projects";

export default function Dashboard({
  handleLogout,
  addProject,
  newProject,
  projects,
  setNewProject,
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
    </div>
  );
}
