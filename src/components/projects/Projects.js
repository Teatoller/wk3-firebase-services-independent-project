import React from "react";
import { Button, Input } from "../helpers";

export default function Projects({
  addProject,
  newProject,
  projects,
  setNewProject,
}) {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
      <h3> Add project</h3>
      <Input
        placeholder="Add a New Project"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
      />
      <Button onClick={addProject}>Add Project</Button>
    </div>
  );
}
