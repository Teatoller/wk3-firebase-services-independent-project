import React from "react";
import { Button } from "../helpers";

export default function Bio({ bio, setBio, updateBio }) {
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
      <h2>Bio</h2>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          border: "1px solid #e2e8f0",
          borderRadius: "0.25rem",
        }}
      ></textarea>
      <Button onClick={updateBio}>Update Bio</Button>
    </div>
  );
}
