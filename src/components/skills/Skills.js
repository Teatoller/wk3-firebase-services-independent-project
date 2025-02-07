import React from "react";
import { Button, Input } from "../helpers";

export default function Skills({
  skills,
  setSkills,
  newSkill,
  setNewSkill,
  addSkill,
  deleteSkill,
}) {
  return (
    <div
      className="section"
    >
      <h2>Skills component</h2>
      <div className="input-group">
      <Input
        placeholder="Add a New Skill"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        className="input-field"
      />
      <Button onClick={addSkill}>Add Skill</Button>
      </div>
      <ul className="list">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <li key={skill.id} className="list-item">
                {/* {skill.name} */}
                <span className="project-name">{skill.name}</span>
                            <Button
                              className="btn delete-btn"
                              style={{backgroundColor: "#dc3545"}}
                              onClick={() => deleteSkill(skill.id)}
                            >
                              Delete
                            </Button>
              </li>
               
            ))
          ) : (
            <p className="empty-message">No skills added yet.</p>
          )}
        </ul>
    </div>
  );
}
