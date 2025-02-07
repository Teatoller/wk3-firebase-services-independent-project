import React from "react";

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
    <div>
      <h2>Skills component</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}
