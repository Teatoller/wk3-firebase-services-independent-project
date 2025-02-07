import React from "react";
import { Button, Input } from "../helpers";

export default function Skills() {
  const skills = [
    {
      id: "1",
      name: "JavaScript",
    },
    {
      id: "2",
      name: "HTML5",
    },
    {
      id: "3",
      name: "CSS3",
    },
  ];
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
      <h2>Skills component</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      <Input placeholder="Add a New Skill" value="" onChange="" />
      <Button onClick="">Add Skill</Button>
    </div>
  );
}
