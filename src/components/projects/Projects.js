import React from "react";
import { Button, Input } from "../helpers";

export default function Projects({
  addProject,
  newProject,
  projects,
  setNewProject,
}) {
  return (
    <div className="section">
      <h2>Projects</h2>
      {/* <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul> */}
      <h3> Add project</h3>
      <div className="input-group">
        <Input
          placeholder="Add a New Project"
          className="input-field"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
        />
        <Button className="btn secondary-btn" onClick={addProject}>Add Project</Button>
      </div>
      <ul className="list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id} className="list-item">
              {project.name}
            </li>
          ))
        ) : (
          <p className="empty-message">No projects added yet.</p>
        )}
      </ul>
    </div>
  );
}
