// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">Title of the Project</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/my-tasks">My Tasks</Link>
      </div>
    </nav>
  );
}

export default navbar;
