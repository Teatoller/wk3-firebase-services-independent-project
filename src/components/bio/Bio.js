import React from "react";
import { Button } from "../helpers";

export default function Bio({ bio, setBio, updateBio }) {
  return (
    <div className="section">
      <h2>Bio</h2>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="input-textarea"
      ></textarea>
      <Button className="btn success-btn" onClick={updateBio}>
        Update Bio
      </Button>
    </div>
  );
}
