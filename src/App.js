import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Register from "./components/register/Register";
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
  const [role, setRole] = useState(null);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [bio, setBio] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  console.log("...role", role)

  // useEffect(() => {
  //   auth.onAuthStateChanged(setUser);
  //   if (user) fetchData();
  // }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userDoc = await getDoc(doc(db, "users", authUser.uid));
        if (userDoc.exists()) {
          setUser(authUser);
          setRole(userDoc.data().role);
        }
      } else {
        setUser(null);
        setRole(null);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    try {
      const projectSnapshot = await getDocs(collection(db, "projects"));
      const skillSnapshot = await getDocs(collection(db, "skills"));
      const bioDoc = await getDocs(collection(db, "bio"));

      setProjects(
        projectSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setSkills(
        skillSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      if (!bioDoc.empty) setBio(bioDoc.docs[0].data().text);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth, db);
      setProjects([]);
      setSkills([]);
      setBio("");
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

  const updateBio = async () => {
    try {
      const bioSnapshot = await getDocs(collection(db, "bio"));
      if (!bioSnapshot.empty) {
        const bioDocRef = doc(db, "bio", bioSnapshot.docs[0].id);
        await updateDoc(bioDocRef, { text: bio });
      } else {
        await addDoc(collection(db, "bio"), { text: bio });
      }
    } catch (error) {
      console.error("Error updating bio: ", error);
    }
  };

  const deleteProject = async (id) => {
    await deleteDoc(doc(db, "projects", id));
    fetchData();
  };

  const deleteSkill = async (id) => {
    await deleteDoc(doc(db, "skills", id));
    fetchData();
  };

  const editProject = async (id, newName) => {
    try {
      const projectRef = doc(db, "projects", id);
      await updateDoc(projectRef, { name: newName });

      setProjects((prevProjects) =>
        prevProjects.map((proj) =>
          proj.id === id ? { ...proj, name: newName } : proj
        )
      );
    } catch (error) {
      console.error("Error updating project: ", error);
    }
  };

  const editSkill = async (id, newName) => {
    try {
      const skillRef = doc(db, "skills", id);
      await updateDoc(skillRef, { name: newName });

      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.id === id ? { ...skill, name: newName } : skill
        )
      );
    } catch (error) {
      console.error("Error updating skill: ", error);
    }
  };

  return (
    <div className="App">
      <h1> Profile Bio</h1>
      {!user ? (
        showRegister ? (
          <Register auth={auth} db={db} />
        ) : (
          <Login auth={auth} />
        )
      ) : (
        <Dashboard
          user={user}
          auth={auth}
          role={role}
          handleLogout={handleLogout}
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

      {! user && <button onClick={() => setShowRegister((prev) => !prev)}>
        {showRegister
          ? "Already have an account? Login"
          : "Don't have an account? Register"}
      </button>}
    </div>
  );
}

export default App;
