import React from "react";
import "../../Styles.css";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import Login from "../auth/Login";

export default function Dashboard({
  handleLogout,
  addProject,
  newProject,
  projects,
  setNewProject,
  skills,
  setSkills,
  newSkill,
  setNewSkill,
  addSkill,
  bio,
  setBio,
  updateBio,
  deleteProject,
  deleteSkill,
  editProject,
  editSkill,
  user,
  auth,
  role,
}) {
  return (
    <div className="dashboard-container">
      {!user ? (
        <Login auth={auth} />
      ) : role === "admin" ? (
        <AdminDashboard
          handleLogout={handleLogout}
          user={user}
          auth={auth}
          role={role}
          projects={projects}
          addProject={addProject}
          newProject={newProject}
          setNewProject={setNewProject}
          skills={skills}
          setSkills={setSkills}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          addSkill={addSkill}
          bio={bio}
          setBio={setBio}
          updateBio={updateBio}
          deleteProject={deleteProject}
          deleteSkill={deleteSkill}
          editProject={editProject}
          editSkill={editSkill}
        />
      ) : (
        <UserDashboard
          handleLogout={handleLogout}
          user={user}
          auth={auth}
          role={role}
          projects={projects}
          addProject={addProject}
          newProject={newProject}
          setNewProject={setNewProject}
          skills={skills}
          setSkills={setSkills}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          addSkill={addSkill}
          bio={bio}
          setBio={setBio}
          updateBio={updateBio}
          deleteProject={deleteProject}
          deleteSkill={deleteSkill}
          editProject={editProject}
          editSkill={editSkill}
        />
      )}
    </div>
  );
}
