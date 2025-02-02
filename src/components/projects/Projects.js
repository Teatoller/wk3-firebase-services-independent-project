import React from "react";
import { Button, Input } from "../helpers";

export default function Projects({ addProject, newProject, setNewProject }) {
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
        <li>housing project</li>
        <li>Tree planting exercise</li>
        <li>Water tower project</li>
        <li>Landscaping project</li>
      </ul>
      <h3> Add project</h3>
      <Input
        placeholder="New Project"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
      />
      <Button onClick={addProject}>Add Project</Button>
    </div>
  );
}
