import React, { useState } from "react";
import { Button, Input } from "../helpers";

export default function Skills({
  skills,
  addSkill,
  newSkill,
  setNewSkill,
  deleteSkill,
  editSkill,
}) {
  const [editMode, setEditMode] = useState(null);
  const [editValue, setEditValue] = useState("");

  return (
    <div className="section">
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
              {editMode === skill.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <span>{skill.name}</span>
              )}

              <div className="button-group">
                {editMode === skill.id ? (
                  <>
                    <Button
                      className="btn success-btn"
                      style={{ marginRight: "2px", backgroundColor: "green" }}
                      onClick={() => {
                        editSkill(skill.id, editValue);
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
                      style={{ marginRight: "2px", backgroundColor: "orange" }}
                      onClick={() => {
                        setEditMode(skill.id);
                        setEditValue(skill.name);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="btn error-btn"
                      onClick={() => deleteSkill(skill.id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </div>
            </li>
          ))
        ) : (
          <p className="empty-message">No skills added yet.</p>
        )}
      </ul>
    </div>
  );
}
