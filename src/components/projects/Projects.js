import React from "react";
import { Button, Input } from "../helpers";

export default function Projects({
  addProject,
  newProject,
  projects,
  setNewProject,
  deleteProject,
}) {
  return (
    <div className="section">
      <h2>Projects</h2>

      <h3>Add Project</h3>
      <div className="input-group">
        <Input
          placeholder="Add a New Project"
          className="input-field"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
        />
        <Button className="btn secondary-btn" onClick={addProject}>
          Add Project
        </Button>
      </div>

      <ul className="list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id} className="list-item">
              <span className="project-name">{project.name}</span>
              <Button
                className="btn delete-btn"
                style={{backgroundColor: "#dc3545"}}
                onClick={() => deleteProject(project.id)}
              >
                Delete
              </Button>
            </li>
          ))
        ) : (
          <p className="empty-message">No projects added yet.</p>
        )}
      </ul>
    </div>
  );
}
