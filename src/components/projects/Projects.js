import React, { useState } from "react";
import { Button, Input } from "../helpers";

export default function Projects({
  addProject,
  newProject,
  projects,
  setNewProject,
  deleteProject,
  editProject,
}) {
  const [editMode, setEditMode] = useState(null);
  const [editValue, setEditValue] = useState("");

  return (
    <div className="section">
      <h2>Projects</h2>
      <h3>Add project</h3>
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
              {editMode === project.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <span>{project.name}</span>
              )}

              <div className="button-group">
                {editMode === project.id ? (
                  <>
                    <Button
                      className="btn success-btn"
                      style={{marginRight: "2px", backgroundColor: "green"}}
                      onClick={() => {
                        editProject(project.id, editValue);
                        setEditMode(null);
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      className="btn secondary-btn"
                      onClick={() => setEditMode(null)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="btn edit-btn"
                      style={{marginRight: "2px", backgroundColor: "orange"}}
                      onClick={() => {
                        setEditMode(project.id);
                        setEditValue(project.name);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="btn error-btn"
                      onClick={() => deleteProject(project.id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </div>
            </li>
          ))
        ) : (
          <p className="empty-message">No projects added yet.</p>
        )}
      </ul>
    </div>
  );
}
