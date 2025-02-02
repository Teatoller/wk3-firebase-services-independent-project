import React from "react";
import { Button } from "../helpers";

export default function Dashboard({ handleLogout }) {
  return (
    <div>
        <h2>User Dashboard</h2>
      <Button onClick={handleLogout}>Logout</Button>
      
    </div>
  );
}
