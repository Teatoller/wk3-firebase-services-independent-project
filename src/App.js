import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB9b2mFFAYazaCjGB1Wn-qrk9xSUYmjUU",
  authDomain: "profile-bio.firebaseapp.com",
  projectId: "profile-bio",
  storageBucket: "profile-bio.firebasestorage.app",
  messagingSenderId: "220780267310",
  appId: "1:220780267310:web:3a6a1d31817865cd259cbf",
  measurementId: "G-TFKJ6VDJ30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

function App() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
    if (user) fetchData();
  }, []);

  console.log("user!!!!", user);
  console.log("projects>>>>>", projects);
  console.log("new projects------", newProject);

  const fetchData = async () => {
    try {
      const projectSnapshot = await getDocs(collection(db, "projects"));

      setProjects(
        projectSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const addProject = async () => {
    try {
      const docRef = await addDoc(collection(db, "projects"), {
        name: newProject,
      });
      setProjects([...projects, { id: docRef.id, name: newProject }]);
      setNewProject("");
    } catch (error) {
      console.error("Error adding project: ", error);
    }
  };

  const addSkill = async () => {
    try {
      const docRef = await addDoc(collection(db, "skills"), { name: newSkill });
      setSkills([...skills, { id: docRef.id, name: newSkill }]);
      setNewSkill("");
    } catch (error) {
      console.error("Error adding skill: ", error);
    }
  };

  return (
    <div className="App">
      <h1> Profile Bio</h1>
      {!user ? (
        <Login auth={auth} />
      ) : (
        <Dashboard
          projects={projects}
          handleLogout={handleLogout}
          addProject={addProject}
          newProject={newProject}
          setNewProject={setNewProject}
        />
      )}
    </div>
  );
}

export default App;
