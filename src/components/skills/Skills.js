import React from "react";
import { Button, Input } from "../helpers";

export default function Skills({
  skills,
  setSkills,
  newSkill,
  setNewSkill,
  addSkill,
}) {
  return (
    <div
      className="section"
    >
      <h2>Skills component</h2>
      {/* <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul> */}
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
                {skill.name}
              </li>
            ))
          ) : (
            <p className="empty-message">No skills added yet.</p>
          )}
        </ul>
    </div>
  );
}
