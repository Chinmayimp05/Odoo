// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./views/Login";
import Signup from './views/Signup';
import Projects from "./views/Projects";
import ProjectTasks from "./views/ProjectTasks";
import MyTasks from "./views/MyTasks";
import ProjectForm from "./views/ProjectForm";
import TaskForm from "./views/TaskForm";

// PrivateRoute component to protect routes requiring authentication
function PrivateRoute({ children }) {
  const token = localStorage.getItem("jwtToken");
  return token ? children : <Navigate to="/login" replace />;
}



function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public routes - no navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        {/* Protected routes wrapped with PrivateRoute */}

        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <Projects />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <ProjectTasks />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/my-tasks"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <MyTasks />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/project-form"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <ProjectForm />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/task-form"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <TaskForm />
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
